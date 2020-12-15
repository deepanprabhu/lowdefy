# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# 0.0.0-alpha.7 (2020-12-10)


### Bug Fixes

* **ajv:** fix ajv validate parameter name ([5aba723](https://github.com/lowdefy/lowdefy/commit/5aba7230fec264cc12a8dcbd578da098ef3afe0e))
* **build:** add contextId to saved request file path ([81219b5](https://github.com/lowdefy/lowdefy/commit/81219b5c1dd8b26e213da9e4ab72178ac70ba812))
* **build:** add visible to block schema. ([4865208](https://github.com/lowdefy/lowdefy/commit/4865208416b7cccb0719984b1fb10813084dfbc1))
* **build:** app schema fix, add style on block ([a39c1ca](https://github.com/lowdefy/lowdefy/commit/a39c1ca83b8a859e87c764536c042edcce29f110))
* **build:** fix build issues ([0f1bd9c](https://github.com/lowdefy/lowdefy/commit/0f1bd9c5176b3d7472bf41d77e90dde491225564))
* **build:** fix local run script ([c69ee94](https://github.com/lowdefy/lowdefy/commit/c69ee94c057ef1ed1b0a29d88c0a3b475f62dcd1))
* **build:** Fix lowdefy schema, closes [#269](https://github.com/lowdefy/lowdefy/issues/269) ([09105a9](https://github.com/lowdefy/lowdefy/commit/09105a99b33bb358aac17593b4ad29906a461791))
* **build:** Icon block is part of blocks-antd package ([8507556](https://github.com/lowdefy/lowdefy/commit/8507556c10a9e076cf0d769a739d5687f3385482))
* **build:** improve error if block meta can not be found ([03dccb1](https://github.com/lowdefy/lowdefy/commit/03dccb169d71c9bb417d3754615d50937abfb38d)), closes [#121](https://github.com/lowdefy/lowdefy/issues/121)
* **build:** in shcema areas.content.block must be an array ([f53dcb8](https://github.com/lowdefy/lowdefy/commit/f53dcb8fffd18624b5f8b3aee11c5ed785c8d1e7))
* **build:** remove test file from git ignore ([c16ad0b](https://github.com/lowdefy/lowdefy/commit/c16ad0b5b17dc4b093ff5972ab7f27b6d987b749))
* **build:** remove unneccesary cli logs ([1f27b7d](https://github.com/lowdefy/lowdefy/commit/1f27b7d5d2c739fbffa21a04971c674fe9ce26cd))
* **build:** write block metas to meta folder in cache ([d6277a5](https://github.com/lowdefy/lowdefy/commit/d6277a59bb2561ac26d6cb4e292e0888f0da5bb4))
* **build:** write config object to output in build ([46ec66d](https://github.com/lowdefy/lowdefy/commit/46ec66d9e0330fafb323cbea2bdd3118a48eb7c4))
* **deps:** update dependency axios to v0.21.0 ([aee32c0](https://github.com/lowdefy/lowdefy/commit/aee32c0b37646e07bc8d5eeff7947e3af84ceb2c))
* **deps:** update dependency js-yaml to v3.14.1 ([935ad89](https://github.com/lowdefy/lowdefy/commit/935ad894cd221901784360bee684189a60a2d386))
* **deps:** update dependency uuid to v8.3.2 ([abca08f](https://github.com/lowdefy/lowdefy/commit/abca08f599ec689e45ac208670bceb6f4fa2b089))
* move file helpers to new node-utils package ([0a6ef8d](https://github.com/lowdefy/lowdefy/commit/0a6ef8d09b6f1a75c8a8ceb1749f7dfe14c46b5f))


### Features

* **blocksTools:** mockBlockProps to provide schema errors ([6c192d4](https://github.com/lowdefy/lowdefy/commit/6c192d42b0ab9521b9c74a3a1466b03d414864bb))
* **build:** add block meta loader ([2a483ad](https://github.com/lowdefy/lowdefy/commit/2a483ad8e6237771eb485cad11364c85883b6943))
* **build:** add build context ([0f13e41](https://github.com/lowdefy/lowdefy/commit/0f13e4114dc96a9af918452918614cd13d8930a1))
* **build:** add build pages function ([01e892f](https://github.com/lowdefy/lowdefy/commit/01e892fad5d4c6c5c59406501cd936668b244085))
* **build:** add buildRefs function ([3ab2819](https://github.com/lowdefy/lowdefy/commit/3ab2819944fc3f7dd122e18b8e90ac24e832a5c9))
* **build:** add clean directory util ([127eb39](https://github.com/lowdefy/lowdefy/commit/127eb397134811126253d4feb820e421faaa71e5))
* **build:** add cleanOutputDirectory function ([e3a3bf9](https://github.com/lowdefy/lowdefy/commit/e3a3bf9952f7a07e981cd5ef2e38cfd60c68e636))
* **build:** add color selector defaultMetaLocations ([6c28a66](https://github.com/lowdefy/lowdefy/commit/6c28a6683c32062f457991ad7746d1eb321bb223))
* **build:** add defaultMetaLocations ([fe14001](https://github.com/lowdefy/lowdefy/commit/fe140013df9c145c457be2c039747f39c64983bf))
* **build:** add error messages to lowdefy schema ([6fd15f0](https://github.com/lowdefy/lowdefy/commit/6fd15f0bbcd031a79c215321b195a0fe0fae34b4))
* **build:** add getFileExtension util ([46586f0](https://github.com/lowdefy/lowdefy/commit/46586f05f2db9d87493c511a79f9047ee30829b6))
* **build:** add schema test utils ([bb0574f](https://github.com/lowdefy/lowdefy/commit/bb0574fb1da37286fc19ba2bade7b458b4c8fc36))
* **build:** add test schema function, cleanup ([ac216d4](https://github.com/lowdefy/lowdefy/commit/ac216d448396d49e5e08a64244d5c404ad08ef91))
* **build:** add util functions ([8686857](https://github.com/lowdefy/lowdefy/commit/8686857222f52f9939df9c2644e444f96978c3ee))
* **build:** add write functions ([701b583](https://github.com/lowdefy/lowdefy/commit/701b583a6d29a03eedaed5899b48cf94641c3694))
* **build:** build connections and menus ([3f4b486](https://github.com/lowdefy/lowdefy/commit/3f4b486459574e38d9e33c0c9b8b1ac0b918a31f))
* **build:** cleanup, test fixes ([1c1792b](https://github.com/lowdefy/lowdefy/commit/1c1792b6906d1a8d90e3eff811fb978995d8e9b1))
* **build:** init package @lowdefy/build ([6f7f73b](https://github.com/lowdefy/lowdefy/commit/6f7f73bbe021f41b82c347130dfe79a40d5e2273))
* **build:** remove mutations ([1e9801b](https://github.com/lowdefy/lowdefy/commit/1e9801b6ac4be70f1f30635ac450394f0c0db973))
* **build:** update app schema ([fc40948](https://github.com/lowdefy/lowdefy/commit/fc40948b488a2e3a105c8dcb123a4fe26e096aeb))
* **build:** use @lowdefy/ajv for json schema checks ([98eb4be](https://github.com/lowdefy/lowdefy/commit/98eb4be30cf217b9db0dd27e8c68ddadb480b67e))
* **build:** write pages and requests ([fc6176d](https://github.com/lowdefy/lowdefy/commit/fc6176d312dbcaaa9238d2c1990bb8c414596028))
* **cli:** add errorBoundary and getLowdefyVersion utils ([519e604](https://github.com/lowdefy/lowdefy/commit/519e6047714a8e32072eaacaa111eff666b69e71))
* **cli:** improve cli console logs ([7ca7509](https://github.com/lowdefy/lowdefy/commit/7ca7509e2696e2380a02aded5b22d6bd9b1ec62f)), closes [#247](https://github.com/lowdefy/lowdefy/issues/247)
* **cli:** init cli with build command ([92fff8f](https://github.com/lowdefy/lowdefy/commit/92fff8f157ce6ac2d2df09dac7f8f2073e120b63))
* **cli:** init dev server ([7eae1a8](https://github.com/lowdefy/lowdefy/commit/7eae1a80f456f0987c8835a3966ca5a7a6a80018))
* **cli:** init module federation of build script ([34dba01](https://github.com/lowdefy/lowdefy/commit/34dba017246b38b940f6614d66def34844f9e961))
* update webpack configs ([bcce3c8](https://github.com/lowdefy/lowdefy/commit/bcce3c85cea5857e429f1821785ffb939dcaa52a))
* **helpers:** move file utilities to helpers ([1159ac7](https://github.com/lowdefy/lowdefy/commit/1159ac71e7e1029c8c9d94e1826fea2f72d76aa9))