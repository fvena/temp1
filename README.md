# TypeScript Library Template

A simple and professional template for developing and maintaining TypeScript libraries with modern tools, automated releases, and best practices.

## Features

- **[TypeScript](https://www.typescriptlang.org)**: Write maintainable and strongly-typed code.
- **[Tsup](https://tsup.egoist.dev)**: Bundle the library for both ESM and CommonJS.
- **[Prettier](https://prettier.io)**: Enforce consistent code style.
- **[ESLint](https://eslint.org)**: Analyze and fix code issues.
- **[Vitest](https://vitest.dev)**: Modern testing framework with excellent developer experience.
- **[Husky](https://typicode.github.io/husky/) & [Lint-Staged](https://github.com/lint-staged/lint-staged)**: Automate code checks on commits.
- **[Commitlint](https://commitlint.js.org)**: Enforce conventional commit messages.
- **[Release-it](https://github.com/release-it/release-it)**: Automate versioning and changelog generation for releases.
- **[Github Actions](https://github.com/features/actions)**: CI/CD with Github Actions.
- **[Dependabot](https://docs.github.com/en/code-security/dependabot)**: Keep dependencies up-to-date.
- **[Vitepress](https://vitepress.dev)**: Generate beautiful documentation with Vitepress.
- **[AreTheTypesWrong](https://www.npmjs.com/package/@arethetypeswrong/cli)**: Ensure type accuracy for published packages.

## Getting Started

### Github Template

This is a template repo. Click the green `Use this template` button to get started.

### Clone the repository

```bash
git clone https://github.com/fvena/typescript-library-template.git
cd typescript-library-template
npm install
```

## Checklist

When you use this template, make sure to update the following:

- [ ] Remove `.git` directory and initialize a new git repository `rm -rf .git && git init`
- [ ] Install dependencies `npm install` (**Important**: install the dependencies after update the repository)
- [ ] Update the `package.json` file with your library information (name, version, description, etc.)
- [ ] Update the `LICENSE` file with your name or organization and the year
- [ ] Update the `README.md` file with your library information
- [ ] Remove `CHANGELOG.md` file
- [ ] Setup `NPM_TOKEN` in the Github repository secrets (follow the [instructions](#setup-npm-token-in-repository-secrets) below)
- [ ] In your repository's settings under "Pages" menu item, select `Github Actions` in `Build and deployment` source

And, enjoy coding your library :)

## Usage

The template contains the following scripts:

- `dev` - Start a development environment.
- `build` - Bundle the library for production.
- `format` - Format the code with Prettier.
- `typecheck` - Check types with TypeScript.
- `lint` - Analyze code issues with ESLint.
- `test` - Run tests with Vitest.
- `test:watch` - Run tests in watch mode.
- `check-exports` - Check type accuracy for published packages.
- `prepare` - Script for setting up husky hooks.
- `release` - Release a new version.
- `doc:dev` - Start a development environment for documentation.
- `doc:build` - Build the documentation for production.
- `doc:preview` - Preview the built documentation locally.

## Development Workflow

This template is set up with a single branch workflow. This means that you will make changes directly in the `main` branch. This approach is suitable for small projects and solo developers. Here is the workflow:

### Development

- Make changes directly in the `main` branch.
- Commit your changes with [conventional commit messages](https://gist.github.com/fvena/89e706aaf74705a83c7c39a171da466c).
- Push your changes to the remote repository.
- The CI github action will lint the code and run the tests.

### Release

- Run the release process manually from your local machine when you are ready to release a new version `npm run release`.
- The release process will:
  - Bump the version based on the commit messages.
  - Generate a changelog.
  - Create a new git tag.
  - Push the changes to the remote repository.
- The Publish github action will publish the new version to npm.
- The Deploy github action will deploy the documentation to Github Pages.

## Test your library locally

To test your library locally, you can use the `npm link` command. Here is how you can do it:

1. Run `npm link` in the root of your library
2. Run `npm link <your-library-name>` in the project where you want to use your library
3. Now you can import your library in the project

   ```javascript
   import { yourFunction } from "<your-library-name>";
   ```

After testing, you can unlink the library by running `npm unlink <your-library-name>` in the project where you linked the library.

1. Run `npm unlink` in the root of your library
2. Run `npm unlink <your-library-name>` in the project where you want to use your library

## Setup NPM token in repository secrets

To publish the package to npm, you need to set up the `NPM_TOKEN` in the Github repository secrets. Here is how you can do it:

### Get your NPM token

1. Go to the [npm website](https://www.npmjs.com)
2. Log in to your account
3. In your avatar dropdown, click on `Access Tokens`
4. Click on `Generate New Token`
5. Set the token name (ex: library name)
6. Select `Automation` type and click on `Generate Token`
7. Copy the generated token

### Add the NPM token to the Github repository secrets

1. Go to your Github repository
2. Click on `Settings` tab
3. Click on `Environments` in the left sidebar
4. Click on `New environment`
5. Set the environment name to `Release` and click on `Configure environment`
6. Click on `Add environment secret`
7. Use the `NPM_TOKEN` as the secret name and paste the token value
8. Click on `Add secret`

## Acknowledgements

If you find this template useful, please give it a star. It will help others to discover it.

## Used by

- [Your project]()

If you are using this template, feel free to open a PR to add your project to the list.

## License

This template was created under the [MIT License](./LICENSE).
