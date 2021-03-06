/*
  Copyright 2020-2021 Lowdefy, Inc

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

      http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
*/

import React from 'react';
import { type } from '@lowdefy/helpers';
import { MemoryRouter } from 'react-router-dom';

import mockBlock from './mockBlock';

const runMockRenderTests = ({
  Block,
  enzyme,
  examples,
  logger,
  meta,
  mocks,
  reset = () => null,
}) => {
  const { before, methods, getProps } = mockBlock({ meta, logger });

  beforeEach(() => {
    reset();
    before();
  });
  const values = meta.values
    ? [type.enforceType(meta.valueType, null), ...meta.values]
    : [type.enforceType(meta.valueType, null)];

  examples.forEach((ex) => {
    values.forEach((value, v) => {
      mocks.forEach((mock) => {
        test(`Mock render - ${ex.id} - value[${v}] - ${mock.name}`, () => {
          const Shell = () => {
            const props = getProps(ex);
            return (
              <Block
                {...props}
                methods={{ ...props.methods, makeCssClass: methods.makeCssClass }}
                value={value}
              />
            );
          };
          enzyme.mount(
            <MemoryRouter>
              <Shell />
            </MemoryRouter>
          );
          expect(mock.fn.mock.calls).toMatchSnapshot();
        });
      });
    });
  });
};

export default runMockRenderTests;
