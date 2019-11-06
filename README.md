# Everest web app

## Tools

### General front end tooling

- [React](https://reactjs.org/) (using [Hooks](https://reactjs.org/docs/hooks-intro.html))
- [TypeScript](https://www.typescriptlang.org/)
- [Create React App](https://create-react-app.dev/) to handle build configuration
- [`emotion`](https://emotion.sh) for styling components with css-in-js
- [Apollo Client](https://www.apollographql.com/docs/react/) for querying for indexed data from the smart contracts
- [React Router](https://github.com/ReactTraining/react-router) v5 for client-side routing
- [Rebass](https://rebassjs.org/) for responsive grid and base component library
- [GitHub Pages](https://pages.github.com/) for hosting

### Ethereum-related tooling

- [`web3-react`](https://github.com/NoahZinsmeister/web3-react) for an abstraction that lets us easily swap in and out web3 providers (MetaMask, WalletConnect, etc.) and a dev-friendly context containing an instantiated ethers.js instance, the current account, and network id available globally throughout the dapp via a [React Context](https://reactjs.org/docs/context.html).
- [`ethers.js`](https://github.com/ethers-io/ethers.js) v4 (with an upgrade to v5 planned soon) for writing data to the contracts
- [The Graph](https://thegraph.com/) for indexing data from the contracts
- [MetaMask](https://metamask.io/) for an Ethereum account available as a browser extension

### Contracts

_Coming soon_

## Tips for local development

To run on a testnet, make a copy of `.env.local.example` named `.env.local`, change `REACT_APP_NETWORK_ID` to `"{yourNetworkId}"`, and change `REACT_APP_NETWORK_URL` to e.g. `"https://{yourNetwork}.infura.io/v3/{yourKey}"`. Fear not: `.env.local` is in the `.gitignore` file, so you won't accidentally commit it.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
