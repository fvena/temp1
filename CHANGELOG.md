# Changelog

## 0.7.0 (2024-12-05)

- fix: add conditional check for release commit message before publishing to NPM ([1edc540](https://github.com/fvena/typescript-library-template.git/commit/1edc540))
- fix: add conditional check for successful workflow run before publishing to NPM ([43a4d5e](https://github.com/fvena/typescript-library-template.git/commit/43a4d5e))
- fix: restore tag push trigger for release workflow ([7c2c932](https://github.com/fvena/typescript-library-template.git/commit/7c2c932))
- feat: consolidate CI workflows and add publish and documentation build jobs ([6bacb79](https://github.com/fvena/typescript-library-template.git/commit/6bacb79))

## <small>0.6.1 (2024-12-05)</small>

- fix: update tag pattern in release workflow ([102f8f2](https://github.com/fvena/typescript-library-template.git/commit/102f8f2))

## 0.6.0 (2024-12-05)

- feat: restructure CI workflows and add release process ([4ae0f02](https://github.com/fvena/typescript-library-template.git/commit/4ae0f02))

## <small>0.5.33 (2024-12-05)</small>

- fix: remove tag condition from CI workflow jobs ([f9af03f](https://github.com/fvena/typescript-library-template.git/commit/f9af03f))

## <small>0.5.32 (2024-12-05)</small>

- fix: update CI workflow to use github.ref_type for tag checks ([5fac91f](https://github.com/fvena/typescript-library-template.git/commit/5fac91f))

## <small>0.5.31 (2024-12-05)</small>

- fix: update CI workflow to remove tag trigger and standardize on Ubuntu 22.04 ([e5a7d74](https://github.com/fvena/typescript-library-template.git/commit/e5a7d74))

## <small>0.5.30 (2024-12-05)</small>

- fix: update CI workflow to use ubuntu-latest for deployment ([03eefb4](https://github.com/fvena/typescript-library-template.git/commit/03eefb4))

## <small>0.5.29 (2024-12-05)</small>

## <small>0.5.28 (2024-12-05)</small>

- fix: update CI workflow to run on Ubuntu 22.04 and trigger on version tags ([b442d63](https://github.com/fvena/typescript-library-template.git/commit/b442d63))

## <small>0.5.27 (2024-12-05)</small>

- fix: ensure CI jobs only run for tagged releases ([68e809f](https://github.com/fvena/typescript-library-template.git/commit/68e809f))

## <small>0.5.26 (2024-12-05)</small>

- fix: enable cancellation of in-progress workflows and enforce job dependencies in CI ([c45d68c](https://github.com/fvena/typescript-library-template.git/commit/c45d68c))

## <small>0.5.25 (2024-12-05)</small>

- refactor: reorganize workflows and update NPM publish process ([49be714](https://github.com/fvena/typescript-library-template.git/commit/49be714))

## <small>0.5.24 (2024-12-05)</small>

- fix: add conditional execution for NPM publish workflow based on CI completion ([0a47b09](https://github.com/fvena/typescript-library-template.git/commit/0a47b09))

## <small>0.5.23 (2024-12-05)</small>

- fix: update NPM token secret in publish workflow ([9f996ec](https://github.com/fvena/typescript-library-template.git/commit/9f996ec))

## <small>0.5.22 (2024-12-05)</small>

- fix: add conditional check for successful workflow run in deploy.yml ([22b089e](https://github.com/fvena/typescript-library-template.git/commit/22b089e))

## <small>0.5.21 (2024-12-05)</small>

- fix: update NPM token secret in publish workflow ([bd8b3a9](https://github.com/fvena/typescript-library-template.git/commit/bd8b3a9))

## <small>0.5.20 (2024-12-05)</small>

- chore: rename package to typescript-library-template-didor ([6205008](https://github.com/fvena/typescript-library-template.git/commit/6205008))

## <small>0.5.19 (2024-12-05)</small>

## <small>0.5.18 (2024-12-05)</small>

- fix: update npm publish command to include public access and enhance README ([d425452](https://github.com/fvena/typescript-library-template.git/commit/d425452))

## <small>0.5.17 (2024-12-05)</small>

- refactor: rename release workflow to publish and update NPM token secret ([de6659c](https://github.com/fvena/typescript-library-template.git/commit/de6659c))

## <small>0.5.16 (2024-12-05)</small>

- fix: update NPM authentication token secret name in release workflow ([94b8df0](https://github.com/fvena/typescript-library-template.git/commit/94b8df0))

## <small>0.5.15 (2024-12-05)</small>

- refactor: update release workflow to improve environment setup and fetch depth ([622a99e](https://github.com/fvena/typescript-library-template.git/commit/622a99e))

## <small>0.5.14 (2024-12-05)</small>

- refactor: rename publish workflow to release and simplify setup steps ([8d47c21](https://github.com/fvena/typescript-library-template.git/commit/8d47c21))

## <small>0.5.13 (2024-12-05)</small>

- refactor: simplify NPM publish command and add publishConfig for public access ([3c7c6e1](https://github.com/fvena/typescript-library-template.git/commit/3c7c6e1))

## <small>0.5.12 (2024-12-04)</small>

- refactor: update publish workflow permissions and fix registry URL format ([f4d9441](https://github.com/fvena/typescript-library-template.git/commit/f4d9441))

## <small>0.5.11 (2024-12-04)</small>

- refactor: update workflows and documentation for TypeScript library template ([6af6500](https://github.com/fvena/typescript-library-template.git/commit/6af6500))

## <small>0.5.10 (2024-12-04)</small>

- refactor: modify publish workflow to run conditionally based on branch naming ([81b888f](https://github.com/mattpocock/tt-package-demo/commit/81b888f))
- refactor: update concurrency group in deploy workflow and modify publish workflow trigger ([fd7101d](https://github.com/mattpocock/tt-package-demo/commit/fd7101d))
- refactor: update publish workflow to trigger on version tag pushes ([3ba5ec4](https://github.com/mattpocock/tt-package-demo/commit/3ba5ec4))

## <small>0.5.9 (2024-12-04)</small>

- refactor: update concurrency group in deploy workflow to use run ID ([ca84936](https://github.com/mattpocock/tt-package-demo/commit/ca84936))

## <small>0.5.8 (2024-12-04)</small>

- refactor: update deploy workflow to trigger on completion of Publish workflow ([7dc40df](https://github.com/mattpocock/tt-package-demo/commit/7dc40df))

## <small>0.5.7 (2024-12-04)</small>

- refactor: remove workflow_run triggers from deploy and publish configurations ([a82f892](https://github.com/mattpocock/tt-package-demo/commit/a82f892))

## <small>0.5.6 (2024-12-04)</small>

- refactor: streamline workflow_run types in deploy and publish configurations ([78a47be](https://github.com/mattpocock/tt-package-demo/commit/78a47be))

## <small>0.5.5 (2024-12-04)</small>

- refactor: remove pull_request trigger from CI workflow ([7d8ef9e](https://github.com/mattpocock/tt-package-demo/commit/7d8ef9e))

## <small>0.5.4 (2024-12-04)</small>

- refactor: simplify workflow names and adjust dependencies in deploy and publish configurations ([6582c57](https://github.com/mattpocock/tt-package-demo/commit/6582c57))

## <small>0.5.3 (2024-12-04)</small>

- refactor: rename workflows and enhance CI/CD configuration ([ba1e403](https://github.com/mattpocock/tt-package-demo/commit/ba1e403))

## <small>0.5.2 (2024-12-04)</small>

- fix: update CI workflow to trigger on main branch and adjust deploy workflow ([71ddfeb](https://github.com/mattpocock/tt-package-demo/commit/71ddfeb))

## <small>0.5.1 (2024-12-04)</small>

- fix: update VitePress base path and remove pre-init hooks from release configuration ([66f482a](https://github.com/mattpocock/tt-package-demo/commit/66f482a))

## 0.5.0 (2024-12-04)

- feat: add VitePress documentation and deployment workflow ([05d3eb0](https://github.com/mattpocock/tt-package-demo/commit/05d3eb0))

## 0.4.0 (2024-12-04)

- feat: enable automatic push after release tagging ([084dd9f](https://github.com/mattpocock/tt-package-demo/commit/084dd9f))

## 0.3.0 (2024-12-04)

- feat: simplify release command by removing verbosity flag ([60adf69](https://github.com/mattpocock/tt-package-demo/commit/60adf69))

## <small>0.2.7 (2024-12-04)</small>

## <small>0.2.6 (2024-12-04)</small>

## <small>0.2.5 (2024-12-04)</small>

- chore: add header for changelog in release-it configuration ([9300bdb](https://github.com/mattpocock/tt-package-demo/commit/9300bdb))

## <small>0.2.4 (2024-12-04)</small>

- chore: update release-it configuration to add conventional changelog plugin ([f509025](https://github.com/mattpocock/tt-package-demo/commit/f509025))
