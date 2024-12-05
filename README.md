# TypeScript Library Template

A simple, professional, and modern template for building and maintaining TypeScript libraries. This template integrates the best tools, workflows, and practices to help you focus on developing your library without worrying about setup.

## 🚀 Features

- **TypeScript First**: Full support for modern TypeScript features with strict typing.
- **Effortless Build**: Uses [Tsup](https://tsup.egoist.dev) for fast and simple builds. Supports both ESM and CommonJS.
- **Code Quality**: Preconfigured [ESLint](https://eslint.org) and [Prettier](https://prettier.io)ensure a clean, maintainable codebase.
- **Testing Ready**: Includes [Vitest](https://vitest.dev) for fast, reliable unit testing.
- **Conventional Commits**: Enforces commit message standards with [Commitlint](https://commitlint.js.org) and [Husky](https://typicode.github.io/husky/).
- **Documentation**: Powered by [Vitepress](https://vitepress.dev) for easy and interactive documentation.
- **Automated Releases**: Handles versioning and changelogs with [Release-it](https://github.com/release-it/release-it).
- **CI/CD Pipelines**: Configured with [Github Actions](https://github.com/features/actions) for linting, testing, publishing, and deploying docs.
- **Dependabot Integration**: Keeps your dependencies updated automatically.

## 📦 Getting Started

### 1. Create Your Repository

You can start using this template by clicking the green "Use this template" button or cloning the repository:

```bash
git clone https://github.com/fvena/typescript-library-template.git
cd typescript-library-template
```

### 2. Reset Git History

Reset the git history and initialize a fresh repository for your project:

```bash
rm -rf .git
git init
```

### 3. Install dependencies

**Important**: install the dependencies after updating the repository.

```bash
npm install
```

### 4. Update Project Information

Make sure to update the following files:

- `package.json`: Update `name`, `version`, `description`, `author`, `repository`and other relevant fields.
- `LICENSE`: Update the copyright year and author information.
- `README.md`: Replace file with `README_TEMPLATE.md` and update the content.
- `CHANGELOG.md`: Remove the file to start fresh.

### 5. Setup NPM token

To publish your library to NPM, you'll need to set up an NPM token:

#### Get your NPM token

1. Go to the [npm website](https://www.npmjs.com)
1. Log in to your account
1. In your avatar dropdown, click on `Access Tokens`
1. Click on `Generate New Token`
1. Set the token name (ex: library name)
1. Select `Automation` type and click on `Generate Token`
1. Copy the generated token

#### Add the NPM token to the Github repository secrets

1. Go to your Github repository
1. Click on `Settings` tab
1. Click on `Secrets and variables` > `Actions` in the left sidebar
1. Click on `New repository secret`
1. Use the `NPM_TOKEN` as the secret name and paste the token value
1. Click on `Add secret`

### 6. Setup Github Pages for documentation

1. Go to your Github repository
1. Click on `Settings` tab
1. Click on `Pages` in the left sidebar
1. Select `Github Actions` in `Build and deployment` source

## 📑 Scripts Overview

| Script          | Description                                        |
| --------------- | -------------------------------------------------- |
| `dev`           | Starts `tsup` in watch mode for development.       |
| `build`         | Bundle the library for production.                 |
| `format`        | Format the code with Prettier.                     |
| `typecheck`     | Check types with TypeScript.                       |
| `lint`          | Lints the codebase with ESLint.                    |
| `test`          | Run tests with Vitest.                             |
| `test:watch`    | Run tests in watch mode for development.           |
| `test:ui`       | Run tests with the Vitest UI.                      |
| `check-exports` | Check type accuracy for published packages.        |
| `release`       | Release a new version.                             |
| `doc:dev`       | Starts a local server for VitePress documentation. |
| `doc:build`     | Build the documentation for production.            |
| `doc:preview`   | Preview the built documentation locally.           |

## 🔄 Development Workflow

This template is set up with a single branch workflow. This means that you will make changes directly in the `main` branch. This approach is suitable for small projects and solo developers. Here is the workflow:

1. Make changes directly in the `main` branch.
1. Use [conventional commit messages](https://gist.github.com/fvena/89e706aaf74705a83c7c39a171da466c).
1. Push changes to trigger the CI pipeline for linting and testing.

## Releasing a Version

1. Run the release script locally to bump the version and generate a changelog. The release script will:

   - Update the version based on the commit messages.
   - Generate a changelog.
   - Create a new git tag.
   - Push changes and tags to the repository.

   ```bash
   npm run release
   ```

1. The CI/CD pipeline will publish the new version to NPM and deploy updated documentation to Github Pages.

## 📖 Documentation

This template includes a preconfigured docs folder powered by Vitepress. To start writing documentation:

1. Edit or add markdown files in the docs folder.
2. Start a local preview with:

   ```bash
   npm run docs:dev
   ```

## 🧩 FAQs

<details>
  <summary><strong>Error to publish the package to npm</strong></summary>

- `npm ERR! code E403`: This error occurs when your email is not verified in npm or if the package name is already taken.

- `npm error code ENEEDAUTH`: This error occurs when the npm token is not set up correctly.

</details>

<details>
  <summary><strong>How do I test my library locally?</strong></summary>

- You can use `npm link` to test your library in a local project:

  1. Run `npm link` in your library root.
  1. In the project where you want to use your library, run `npm link <your-library-name>`

- To unlink:

  1. Run `npm unlink <your-library-name>` in the project where you want to use your library
  1. Run `npm unlink` in your library root.

</details>

<details>
  <summary><strong>How do I disable documentation?</strong></summary>

- If you don't need documentation:

  1. Remove the `docs` folder and related `docs:*` scripts from `package.json`.
  1. Remove `vitepress` from the `devDependencies`.
  1. Delete the `buildDocs` and `deployDocs` jobs from the `.github/workflows/ci.yml` file.

</details>

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
1. Create a new branch (git checkout -b feature/my-feature).
1. Make your changes and write tests.
1. Commit your changes with conventional message.
1. Push your branch and open a Pull Request.

## 📜 License

This template was created under the [MIT License](./LICENSE).

## 🌟 Acknowledgements

If you find this template useful, please give it a ⭐ on GitHub! This helps others discover it and supports further development.
