### commit 2 (11abcbfd0803706c43e894e27bb0fcc0707d4ec2)

do pliku NoPermission dodano linijkę
```js
data-testid="logoutButton"
```
na buttonie

dodano nowe testy: 
- plik Spinner.test.js
```js
import React from "react";
import { render } from "@testing-library/react";
import Spinner from "src/components/spinner/Spinner";

it("should render component with passed info text", () => {
  const infoMock = "Sample info text";
  const { getByText } = render(<Spinner info={infoMock} />);
  expect(getByText(infoMock)).toBeVisible();
});

```

- plik PageNotFound.test.js
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import PageNotFound from "src/components/pageNotFound/PageNotFound";

it("displays proper info text", () => {
  const { getByText } = render(<PageNotFound />);
  expect(getByText("Sorry, page not found.")).toBeVisible();
});

```

- plik NoPermission.test.js
```js
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import NoPermission from "src/components/noPermission/NoPermission";

const logoutLinkMock = "https://sample.link/logout";
it("displays proper info text", () => {
  const { getByText } = render(<NoPermission link={logoutLinkMock} />);
  expect(
    getByText("Unfortunately, you do not have permissions to access Ordering Application.")
  ).toBeVisible();
});
it("displays logout button which redirects to provided url", () => {
  delete window.location;
  window.location = {};
  const { getByTestId } = render(<NoPermission link={logoutLinkMock} />);
  fireEvent.click(getByTestId("logoutButton"));
  expect(window.location.href).toBe(logoutLinkMock);
});


```