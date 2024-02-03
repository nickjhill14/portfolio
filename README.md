# 🖼️ Nicholas Hill - Portfolio

The portfolio web app for Nicholas Hill.

## 🛠️ Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Talisman](https://thoughtworks.github.io/talisman/docs/installation/global-hook/)

## 🚀 Getting Started

1. Setup [Node](https://nodejs.org/en):

   ```shell
   nvm use
   ```

2. Install dependencies:

   ```shell
   npm i
   ```

3. Setup [Git hooks](https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks):

   ```shell
   npm run prepare
   ```

## 🖌️ Formatting

```shell
npm run format
```

## 🤔 Typechecking

```shell
npm run typecheck
```

## 🧹 Linting

```shell
npm run lint
```

## ✅ Tests

```shell
npm t
```

To run tests in `watch` mode:

```shell
npm run test:watch
```

### 🧪 E2E Tests

```shell
npm run test:e2e
```

To run tests in `UI` mode:

```shell
npm run test:e2e:ui
```

## 🏃‍♂️ Running Locally

```shell
npm start
```

## 📖 Storybook

```shell
npm run storybook
```

## ✍️ Committing

Prior to committing, run the pre-commit script:

```shell
npm run pre-commit
```

_Note: This runs automatically on commit._
