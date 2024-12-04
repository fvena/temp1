# Vanilla Library Template

Template for creating a library with a fully customizable environment. It generates a hybrid package - both support for CommonJS and ESM modules.

## Features

- Hybrid support - CommonJS and ESM modules
- IIFE bundle for direct browser support without bundler
- Fully customized [eslint](https://eslint.org) configuration based on the config by [@didor/style-guide]()
- Write test quickly and conveniently with [vitest](https://vitest.dev)
- Supports [conventional commits](https://www.conventionalcommits.org) with [commitlint](https://commitlint.js.org)
- Generate beautiful changelogs with [semantic-release]()
- Github CI/CD with Github Actions
- Issue templates and pull request templates
- Ready configuration for [dependabot](https://docs.github.com/en/code-security/dependabot)
- Library releases with just one command

## Getting Started

### Github Template

This is a template repo. Click the green `Use this template` button to get started.

### Clone the repository

```bash
git clone https://
cd vanilla-library-template
npm install
```

## Checklist

When you use this template, make sure to update the following:

- [ ] Remove `.git` directory and initialize a new git repository
- [ ] Update the `package.json` file with your library information (name, version, description, etc.)
- [ ] Update the `LICENSE` file with your name or organization and the year
- [ ] Update the `README.md` file with your library information
- [ ] Clean up the `CHANGELOG.md` file

And, enjoy coding your library :)

## Usage

The template contains the following scripts:

- `dev` - Start the development server
- `build` - Build the library
- `test` - Run tests
- `lint` - Lint the code
- `format` - Format the code
- `release` - Release a new version
- `prepare` - Script for setting up husky hooks

## Branch Workflow

This template uses the following branch workflow:

- `main` - The main branch
- `develop` - The development branch

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

## Acknowledgements

If you find this template useful, please give it a star. It will help others to discover it.

## Used by

- [Your project]()

If you are using this template, feel free to open a PR to add your project to the list.

## License

This template was created under the [MIT License](./LICENSE).
