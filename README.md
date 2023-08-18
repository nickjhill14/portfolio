# Portfolio

## Prerequisites

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Talisman](https://thoughtworks.github.io/talisman/docs/installation/global-hook/)

## Getting Started

1. Setup [Node](https://nodejs.org/en):

   ```shell
   nvm use
   ```

2. Install dependencies:

   ```shell
   npm i
   ```

## Local Dev

### Formatting

```shell
npm run format
```

### Linting

```shell
npm run lint:check
```

To attempt to fix lint issues:

```shell
npm run lint:fix
```

### Tests

```shell
npm t
```

To run tests in `watch` mode:

```shell
npm run test:watch
```

## Running Locally

```shell
npm start
```

### Storybook

```shell
npm run storybook
```

## Contributing

Prior to committing, run the pre-commit script:

```shell
npm run pre-commit
```
