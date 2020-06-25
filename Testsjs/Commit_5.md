### commit 5 (3ac900b7bb1ae379364810529974bfae729b139b)

w tym komicie zmodyfikoano 

- plik PageNotFound.test.js dodając drugi przypadek testowy
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageNotFound from "src/components/pageNotFound/PageNotFound";

it("displays proper info text", () => {
  const { getByText } = render(<PageNotFound />);
  expect(getByText("Sorry, page not found.")).toBeVisible();
});
it("displays back button which redirects to previous page", () => {
  const historyBackMock = jest.fn();
  const { getByText } = render(<PageNotFound history={{ goBack: historyBackMock }} />);
  fireEvent.click(getByText("Back"));
  expect(historyBackMock).toHaveBeenCalled();
});

```

oraz dodano nowe testy:
- plik CustomButtonIcon.test.js
```js
import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, fireEvent } from "@testing-library/react";
import CustomIconButton from "src/components/common/customIconButton/CustomIconButton";

const historyMock = createMemoryHistory();
const renderCustomIconButtonComponent = (additionalProps = {}) =>
  render(
    <Router history={historyMock}>
      <CustomIconButton iconName="Add" text="Sample text" {...additionalProps} />
    </Router>
  );

it("displays provided text", () => {
  const { getByText } = renderCustomIconButtonComponent();
  expect(getByText("Sample text")).toBeVisible();
});
it("displays proper icon", () => {
  const { getByText } = renderCustomIconButtonComponent();
  expect(getByText("Add")).toBeVisible();
});
it("places icon properly", () => {
  const { baseElement, rerender } = renderCustomIconButtonComponent();
  //node type 1 is element, 3 is text
  expect(baseElement.querySelector("button > span").childNodes[0].nodeType).toBe(3);
  expect(baseElement.querySelector("button > span").childNodes[1].nodeType).toBe(1);
  rerender(<CustomIconButton iconLeft iconName="Add" text="Sample text" />);
  expect(baseElement.querySelector("button > span").childNodes[0].nodeType).toBe(1);
  expect(baseElement.querySelector("button > span").childNodes[1].nodeType).toBe(3);
});
it("redirects to provided path", () => {
  const { getByText } = renderCustomIconButtonComponent({ path: "/sample-path" });
  expect(historyMock.length).toBe(1);
  fireEvent.click(getByText("Sample text"));
  expect(historyMock.length).toBe(2);
  expect(historyMock.location.pathname).toBe("/sample-path");
});

```

oraz test:
- plik ActionBar.test.js
```js
import React from "react";
import { render } from "@testing-library/react";
import ActionBar from "src/components/common/actionBar/ActionBar";

it("displays provided children component", () => {
  const ChildrenComponent = () => <div data-testid="childrenComponent"></div>;
  const { getByTestId } = render(
    <ActionBar>
      <ChildrenComponent />
    </ActionBar>
  );
  expect(getByTestId("childrenComponent")).toBeVisible();
});
```
