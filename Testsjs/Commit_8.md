### commit 8 (846f3046ace980d8ff38fdef718a7c26543210d1)


w tym komicie dodano testy dla:
- plik ProgressButton.test.js
```js
import React from "react";
import { render } from "@testing-library/react";
import ProgressButton from "src/components/common/progressButton/ProgressButton";
const contentMock = "button text";
it("displays provided text", () => {
  const { getByText } = render(<ProgressButton text={contentMock} />);
  expect(getByText(contentMock)).toBeVisible();
});
it("shows spinner when it's in progress", () => {
  const { getByRole } = render(<ProgressButton text={contentMock} progress={true} />);
  expect(getByRole("progressbar")).toBeVisible();
});

```

- plik PageTitle.test.js
```js
import React from "react";
import { render } from "@testing-library/react";
import PageTitle from "src/components/common/PageTitle/PageTitle";

const titleMock = "Sample page title";
it("displays provided title", () => {
  const { getByText } = render(<PageTitle>{titleMock}</PageTitle>);
  expect(getByText(titleMock)).toBeVisible();
});

```

- plik OaSiActionBar.test.js
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import OaSiActionBar from "src/components/common/oaSiActionBar/OaSiActionBar";

const backUrlMock = "/sample-url",
  historyMock = createMemoryHistory();
const RouterWrapper = ({ children }) => <Router history={historyMock}>{children}</Router>; // eslint-disable-line
const renderOaSiActionBarComponent = props =>
  render(<OaSiActionBar {...props} />, {
    wrapper: RouterWrapper
  });

it("displays back button", () => {
  const { getByRole } = renderOaSiActionBarComponent();
  expect(getByRole("button")).toBeVisible();
  expect(getByRole("button").textContent).toBe("Back");
});
it("redirects to provided backUrl", () => {
  const { getByRole } = renderOaSiActionBarComponent({ backUrl: backUrlMock });
  fireEvent.click(getByRole("button"));
  expect(historyMock.location.pathname).toBe(backUrlMock);
});

```

- plik ErrorBoundary.test.js
```js
import React from "react";
import { render } from "@testing-library/react";
import ErrorBoundary from "src/components/common/errorBoundary/errorBoundary";
import { constants } from "src/components/common/constants";

const errorText = "Error thrown from problem child";
const ErrorChild = () => {
  throw new Error(errorText);
};

const NoErrorChild = () => <div>Component rendered without error</div>;

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
});

it("renders child when there is no error", () => {
  const { getByText } = render(
    <ErrorBoundary>
      <NoErrorChild />
    </ErrorBoundary>
  );
  expect(getByText("Component rendered without error")).toBeVisible();
});
it("renders error boundary message when error on the child occurs", () => {
  const { getByText } = render(
    <ErrorBoundary>
      <ErrorChild />
    </ErrorBoundary>
  );
  expect(getByText(constants.ERROR.GENERAL_ERROR)).toBeVisible();
  expect(getByText(`Error: ${errorText}`, { exact: false })).toBeVisible();
});

```

- DialogDeleteItem.test.js
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DialogDeleteItem from "src/components/common/dialogDeleteItem/DialogDeleteItem";

const closeHandlerMock = jest.fn(),
  confirmHandlerMock = jest.fn();

const renderDialogDeleteItemComponent = () =>
  render(
    <DialogDeleteItem onClose={closeHandlerMock} onConfirm={confirmHandlerMock} open={true} />
  );
it("displays dialog with it's content", () => {
  const { getByText } = renderDialogDeleteItemComponent();
  expect(getByText("Are you sure that you want to delete this item?")).toBeVisible();
  expect(getByText("Cancel")).toBeVisible();
  expect(getByText("Delete")).toBeVisible();
});
it("calls onConfirm handler", () => {
  const { getByText } = renderDialogDeleteItemComponent();
  fireEvent.click(getByText("Delete"));
  expect(confirmHandlerMock).toHaveBeenCalledTimes(1);
});
it("calls onClose handler", () => {
  const { getByText } = renderDialogDeleteItemComponent();
  fireEvent.click(getByText("Cancel"));
  expect(closeHandlerMock).toHaveBeenCalledTimes(1);
});

```

- plik CustomSnackbar.test.js
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CustomSnackbar from "src/components/common/customSnackbar/CustomSnackbar";

const closeHandlerMock = jest.fn(),
  messageMock = "Sample snackbar message";

const renderCustomSnackbarComponent = additionalProps =>
  render(
    <CustomSnackbar
      status="success"
      isOpen={true}
      onClose={closeHandlerMock}
      message={messageMock}
      {...additionalProps}
    />
  );
it("displays provided message", () => {
  const { getByText } = renderCustomSnackbarComponent();
  expect(getByText(messageMock)).toBeVisible();
});
it("renders proper snackbar type", () => {
  const { getByRole, rerender } = renderCustomSnackbarComponent();
  expect(getByRole("alertdialog").className.includes("success")).toBeTruthy();
  rerender(
    <CustomSnackbar
      status="warning"
      isOpen={true}
      onClose={closeHandlerMock}
      message={messageMock}
    />
  );
  expect(getByRole("alertdialog").className.includes("warning")).toBeTruthy();
  rerender(
    <CustomSnackbar status="error" isOpen={true} onClose={closeHandlerMock} message={messageMock} />
  );
  expect(getByRole("alertdialog").className.includes("error")).toBeTruthy();
});
it("calls onClose handler", () => {
  const { baseElement } = renderCustomSnackbarComponent({ message: null, status: null });
  fireEvent.click(baseElement.querySelector("button[aria-label='Close']"));
  expect(closeHandlerMock).toHaveBeenCalledTimes(1);
});
```