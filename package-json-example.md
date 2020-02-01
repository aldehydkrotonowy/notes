```json
{
  "name": "aaaa",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@babel/core": "7.4.3",
    "@date-io/moment": "^1.3.11",
    "@material-ui/core": "^4.1.3",
    "@material-ui/icons": "3.0.2",
    "@material-ui/pickers": "^3.2.7",
    "@svgr/webpack": "4.1.0",
    "axios": "^0.19.0",
    "babel-jest": "^24.8.0",
    "babel-loader": "8.0.5",
    "babel-plugin-named-asset-import": "^0.3.2",
    "babel-preset-react-app": "^9.0.0",
    "camelcase": "^5.2.0",
    "case-sensitive-paths-webpack-plugin": "2.2.0",
    "classnames": "2.2.6",
    "css-loader": "2.1.1",
    "dotenv": "6.2.0",
    "dotenv-expand": "4.2.0",
    "eslint-loader": "2.1.2",
    "file-loader": "3.0.1",
    "fs-extra": "7.0.1",
    "html-webpack-plugin": "4.0.0-beta.5",
    "http-proxy-middleware": "0.19.1",
    "husky": "^3.0.3",
    "idb": "^4.0.4",
    "identity-obj-proxy": "3.0.0",
    "is-wsl": "^1.1.0",
    "lodash": "^4.17.15",
    "material-table": "^1.52.0",
    "memoize-one": "^5.1.1",
    "mini-css-extract-plugin": "0.5.0",
    "moment": "^2.24.0",
    "optimize-css-assets-webpack-plugin": "5.0.1",
    "pnp-webpack-plugin": "1.2.1",
    "postcss-flexbugs-fixes": "4.1.0",
    "postcss-loader": "3.0.0",
    "postcss-normalize": "7.0.1",
    "postcss-preset-env": "6.6.0",
    "postcss-safe-parser": "4.0.1",
    "qs": "^6.8.0",
    "react": "^16.8.6",
    "react-datepicker": "2.4.0",
    "react-dev-utils": "^9.0.1",
    "react-device-detect": "^1.9.10",
    "react-dom": "16.8.6",
    "react-list-drag-and-drop": "^0.9.2",
    "react-redux": "7.0.2",
    "react-router-dom": "5.0.0",
    "react-select": "3.0.4",
    "react-spinners": "0.5.4",
    "redux": "4.0.1",
    "redux-thunk": "2.3.0",
    "resolve": "1.10.0",
    "semver": "6.0.0",
    "style-loader": "0.23.1",
    "terser-webpack-plugin": "1.2.3",
    "ts-pnp": "1.1.2",
    "url-loader": "1.1.2",
    "uuid": "3.3.2",
    "webpack": "4.29.6",
    "webpack-dev-server": "3.2.1",
    "webpack-manifest-plugin": "2.0.4",
    "workbox-webpack-plugin": "4.2.0",
    "workbox-window": "^4.3.1"
  },
  "devDependencies": {
    "babel-eslint": "^10.0.2",
    "eslint": "^6.1.0",
    "eslint-config-prettier": "^6.0.0",
    "eslint-import-resolver-webpack": "^0.11.1",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-prettier": "^3.1.0",
    "eslint-plugin-react": "^7.14.3",
    "eslint-plugin-react-hooks": "^1.7.0",
    "prettier": "^1.18.2",
    "redux-devtools-extension": "^2.13.8"
  },
  "scripts": {
    "start": "node scripts/start.js",
    "build": "node scripts/build.js",
    "lint": "eslint src",
    "fix-lint": "eslint src --fix",
    "build-prod": "node scripts/build.js"
  },
  "browserslist": [
    ">0.2%",
    "not dead",
    "not ie <= 11",
    "not op_mini all"
  ],
  "homepage": "/oa/",
  "husky": {
    "hooks": {
      "pre-push": "npm run lint"
    }
  },
  "babel": {
    "presets": [
      "react-app"
    ]
  }
}
```