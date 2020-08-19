### commit 1 (79030c40c6aba578eba2637bcc78e4b6bc81518b)
pierwszy komit wygląda jak przygotowanie środowiska
w pierwszysm komicie zainstalowane zostały paczki do package.json

```js
dependencies:
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.3.2",
    "@testing-library/user-event": "^7.1.2",
	"react-app-polyfill": "^1.0.1",
devDependencies
    "jest-environment-jsdom-fourteen": "^0.1.0",
    "jest-resolve": "^24.8.0",
    "jest-watch-typeahead": "^0.3.1",
```
do skryptów dodano skrypt:
  "test": "node scripts/test.js

	
oraz dodana została konfiguracja **jest** w takiej oto postaci:
```js
"husky": {
    "hooks": {
      "pre-push": "npm run lint"
    }
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ],
    "setupFiles": [
      "react-app-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
      "<rootDir>/src/setupTests.js"
    ],
    "testMatch": [
      "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
      "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
    ],
    "testEnvironment": "jest-environment-jsdom-fourteen",
    "transform": {
      "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
      "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
      "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
      "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
      "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
      "^react-native$": "react-native-web",
      "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
      "src(.*)$": "<rootDir>/src$1"
    },
    "moduleFileExtensions": [
      "web.js",
      "js",
      "web.ts",
      "ts",
      "web.tsx",
      "tsx",
      "json",
      "web.jsx",
      "jsx",
      "node"
    ],
    "watchPlugins": [
      "jest-watch-typeahead/filename",
      "jest-watch-typeahead/testname"
    ]
  },
  "babel": {
    "presets": [
      "react-app"
    ]
  }
  ```

ponadto dodatkowo utworzono szereg plików:
- plik jsonconfig.json z zawartością
```js
{
  "compilerOptions": {
    "jsx": "react",
    "baseUrl": "src"
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

- plik setupTests.js z zawartością
```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
```

-  plik ErrorPage.test.js z zawartością
```js
import React from "react";
import { render } from "@testing-library/react";
import ErrorPage from "src/components/errorPage/ErrorPage";

it("displays proper error messages", () => {
  const { getByText } = render(<ErrorPage />);
  expect(
    getByText("There was an error when trying to connect to Ordering Application.")
  ).toBeVisible();
  expect(getByText("Please refresh the page")).toBeVisible();
});
```

prócz tego istniały utorzone jeszcze wcześniej pliki
- datesCalculation.test.js
- utils.test.js

