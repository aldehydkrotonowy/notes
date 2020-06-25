### commit 9 (7a19d510b436577cf609c1d45fc672377321b0a6)

dodano test do 
- plik calculation.test.js
```js
import {
  recalculateIGMPLN,
  recalculateCostPricePLN,
  recalculateTotalOrderCost
} from "src/components/common/calculations";

describe("all exported functions", () => {
  it("accetps only number arguments", () => {
    expect(recalculateCostPricePLN({ costPrice: "xd", exchangeRate: 10, inboundCost: 10 })).toBe(
      NaN
    );
    expect(recalculateIGMPLN({ vatRatePLN: 10, costPricePLN: 10, pricePoint: "string" })).toBe(NaN);
    expect(recalculateTotalOrderCost({ costPrice: "1211,11", quantity: 10 })).toBe(NaN);
  });
});

describe("recalculateIGMPLN function", () => {
  it("return expected values", () => {
    expect(
      recalculateIGMPLN({ vatRatePLN: 23, costPricePLN: 9, pricePoint: 111 })
    ).toMatchInlineSnapshot(`0.9002702702702703`);
  });
});
describe("recalculateCostPricePLN function", () => {
  it("return expected values", () => {
    expect(
      recalculateCostPricePLN({ costPrice: 122, exchangeRate: 2.54, inboundCost: 3 })
    ).toMatchInlineSnapshot(`319.1764`);
  });
});
describe("recalculateTotalOrderCost function", () => {
  it("return expected values", () => {
    expect(recalculateTotalOrderCost({ costPrice: 12, quantity: 10 })).toMatchInlineSnapshot(`120`);
  });
});
```

- plik ThumbnailViewer.test.js
```js
import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import ThumbnailViewer from "src/components/common/thumbnailViewer/ThumbnailViewer";

const rowDataMock = {
  tableNum: 2,
  type: "Washing",
  image:
    "PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOmNjPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgaWQ9InN2ZzU3NzkiIHZpZXdCb3g9IjAgMCA1MjIuODcgMjk5LjM4IiB2ZXJzaW9uPSIxLjEiPgogPHRpdGxlIGlkPSJ0aXRsZTY0MjEiPmNhbWlvbjwvdGl0bGU+CiA8ZyBpZD0ibGF5ZXIxIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTA4LjQ3IC0zMzguOTIpIiBzdHJva2U9IiMwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0iI2ZmZiI+CiAgPHBhdGggaWQ9InBhdGg2Mzc3IiBkPSJtNjEzLjczIDU2MS40MiAxNS41NjUgMTIuNDQ1IDEuMDM3NyAyNC44OTFoLTE3LjY0MXoiIHN0cm9rZS13aWR0aD0iMiIvPgogIDxwYXRoIGlkPSJwYXRoNTg0NyIgZD0ibTMxMS4yNiA1OTkuNTEgMzA0LjkxIDAuMDU3MS0zLjI3NTItMjU5LjY0LTMwMi45MyA0LjQ5MjJ6IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBpZD0icGF0aDYzNTciIGQ9Im0xMjEuOTIgNjAxLjY0IDE5MS40NS0yLjA3NDItMi41OTQyLTE3NC4yNGMtMjcuMzEyIDAuMzczMTctNTAuNjUgMS40Mjk3LTc2LjI3IDUuMTg1NmwtMjMuMzQ4IDY2LjM3NWMtMTcuODM3IDUuNjMwOS03Ni4xNTcgMjAuNDA5LTkwLjI3OCAyOC4wMDJ6IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8ZyBpZD0iZzU4MzUiIHRyYW5zZm9ybT0ibWF0cml4KDEuMzY4IDAgMCAxLjM2NzMgLTIzNC42NiA1Mi45MDgpIj4KICAgPHBhdGggaWQ9InBhdGg1ODM3IiBkPSJtMzMxLjM2IDM5NS4wM2MxLjIxMjcgMjAuNDE2LTIyLjA0NiAzOC41NDgtNDEuNzcgMzAuMzg2LTE5Ljc0Ny02Ljg4NjUtMjcuNDg3LTMzLjc3MS0xNC40NTctNDkuOTA1IDkuMzg1NC0xMy4xMzggMjkuNzc5LTE3LjE0NSA0Mi43OTEtNi44NjI1IDguMzQ5NSA2LjA0NzggMTMuNzU4IDE2LjEwMSAxMy40MzYgMjYuMzgxeiIgc3Ryb2tlLXdpZHRoPSIxLjQ2MjQiLz4KICAgPHBhdGggaWQ9InBhdGg1ODM5IiBkPSJtMzE3LjM2IDM5NS4zMmMwLjY2MjY4IDExLjE2NS0xMi4wNDcgMjEuMDgyLTIyLjgyNSAxNi42MTgtMTAuNzkxLTMuNzY2Mi0xNS4wMi0xOC40NjktNy45LTI3LjI5MiA1LjEyODctNy4xODUyIDE2LjI3My05LjM3NjEgMjMuMzgzLTMuNzUzIDQuNTYyNiAzLjMwNzQgNy41MTgzIDguODA1NCA3LjM0MiAxNC40Mjd6IiBzdHJva2Utd2lkdGg9Ii43MzExOCIvPgogIDwvZz4KICA8ZyBpZD0iZzYzNTkiIHRyYW5zZm9ybT0ibWF0cml4KDEuMzY4IDAgMCAxLjM2NzMgMTI4LjYyIDUxLjkxNCkiPgogICA8cGF0aCBpZD0icGF0aDYzNjEiIGQ9Im0zMzEuMzYgMzk1LjAzYzEuMjEyNyAyMC40MTYtMjIuMDQ2IDM4LjU0OC00MS43NyAzMC4zODYtMTkuNzQ3LTYuODg2NS0yNy40ODctMzMuNzcxLTE0LjQ1Ny00OS45MDUgOS4zODU0LTEzLjEzOCAyOS43NzktMTcuMTQ1IDQyLjc5MS02Ljg2MjUgOC4zNDk1IDYuMDQ3OCAxMy43NTggMTYuMTAxIDEzLjQzNiAyNi4zODF6IiBzdHJva2Utd2lkdGg9IjEuNDYyNCIvPgogICA8cGF0aCBpZD0icGF0aDYzNjMiIGQ9Im0zMTcuMzYgMzk1LjMyYzAuNjYyNjggMTEuMTY1LTEyLjA0NyAyMS4wODItMjIuODI1IDE2LjYxOC0xMC43OTEtMy43NjYyLTE1LjAyLTE4LjQ2OS03LjktMjcuMjkyIDUuMTI4Ny03LjE4NTIgMTYuMjczLTkuMzc2MSAyMy4zODMtMy43NTMgNC41NjI2IDMuMzA3NCA3LjUxODMgOC44MDU0IDcuMzQyIDE0LjQyN3oiIHN0cm9rZS13aWR0aD0iLjczMTE4Ii8+CiAgPC9nPgogIDxwYXRoIGlkPSJwYXRoNjM2NyIgZD0ibTIzOS4xOCA0MzkuMzMgNjQuMzM2LTMuNjI5OXYxNTMuNDlsLTc5LjA4OCAxLjMzMTktMy42Mjk1LTk0LjYzeiIvPgogIDxwYXRoIGlkPSJwYXRoNjM2OSIgZD0ibTI0My4zMyA0NDguMTUtMTMuMTI0IDQ1LjI2NyA2Ny4zNzktMC41MTg1Ny0xLjMzMjQtNDcuODZ6Ii8+CiAgPHBhdGggaWQ9InBhdGg2MzczIiBkPSJtMjc5LjEzIDUwNS43MS0xLjU1NjUgOC4yOTY5IDE3LjEyMi0xLjAzNzEtMC41MTg4NS03LjI1OTh6Ii8+CiAgPHBhdGggaWQ9InBhdGg2Mzc1IiBkPSJtMTIxLjkyIDU3NS4yLTEyLjQ1MiA1LjA4MTh2MTkuNjAxbDEyLjQ1MiAwLjcyNTk4di0yMS4wNTN6IiBzdHJva2Utd2lkdGg9IjIiLz4KICA8cGF0aCBpZD0icGF0aDYzODEiIGQ9Im0zMzcuNTggMzcwLjI4IDMuODM2MiAxNTQuMjQgMjQ2Ljc5LTEuNTQyLTIuNTU3NC0xNTIuMTd6Ii8+CiA8L2c+CiA8bWV0YWRhdGE+CiAgPHJkZjpSREY+CiAgIDxjYzpXb3JrPgogICAgPGRjOmZvcm1hdD5pbWFnZS9zdmcreG1sPC9kYzpmb3JtYXQ+CiAgICA8ZGM6dHlwZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9wdXJsLm9yZy9kYy9kY21pdHlwZS9TdGlsbEltYWdlIi8+CiAgICA8Y2M6bGljZW5zZSByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iLz4KICAgIDxkYzpwdWJsaXNoZXI+CiAgICAgPGNjOkFnZW50IHJkZjphYm91dD0iaHR0cDovL29wZW5jbGlwYXJ0Lm9yZy8iPgogICAgICA8ZGM6dGl0bGU+T3BlbmNsaXBhcnQ8L2RjOnRpdGxlPgogICAgIDwvY2M6QWdlbnQ+CiAgICA8L2RjOnB1Ymxpc2hlcj4KICAgPC9jYzpXb3JrPgogICA8Y2M6TGljZW5zZSByZGY6YWJvdXQ9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL2xpY2Vuc2VzL3B1YmxpY2RvbWFpbi8iPgogICAgPGNjOnBlcm1pdHMgcmRmOnJlc291cmNlPSJodHRwOi8vY3JlYXRpdmVjb21tb25zLm9yZy9ucyNSZXByb2R1Y3Rpb24iLz4KICAgIDxjYzpwZXJtaXRzIHJkZjpyZXNvdXJjZT0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjRGlzdHJpYnV0aW9uIi8+CiAgICA8Y2M6cGVybWl0cyByZGY6cmVzb3VyY2U9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zI0Rlcml2YXRpdmVXb3JrcyIvPgogICA8L2NjOkxpY2Vuc2U+CiAgPC9yZGY6UkRGPgogPC9tZXRhZGF0YT4KPC9zdmc+Cg==",
  id: 32,
  gb: "test2",
  pl: "test3",
  tableData: { id: 1 }
};
//mui popper workaround
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document
  }
});

it("displays provided image thumbnail", () => {
  const { getByTestId, baseElement } = render(
    <ThumbnailViewer rowData={rowDataMock} isBase64 mimeType="image/svg+xml" />
  );
  expect(getByTestId("thumbnailImage")).toBeVisible();
  expect(baseElement.querySelector("img[data-testid='thumbnailImage']").src).toBe(
    `data:image/svg+xml;base64,${rowDataMock.image}`
  );
});
it("displays default placeholder image when row does not contains any image", () => {
  const { getByTestId, baseElement } = render(
    <ThumbnailViewer rowData={{}} mimeType="image/svg+xml" />
  );
  expect(getByTestId("thumbnailImage")).toBeVisible();
  expect(baseElement.querySelector("img[data-testid='thumbnailImage']").src).toMatchInlineSnapshot(
    `"https://via.placeholder.com/50x50.png?text=No+image"`
  );
});
it("displays/hides full picture on thumbnail hover", () => {
  const { getByTestId, baseElement, queryByTestId } = render(
    <ThumbnailViewer rowData={rowDataMock} isBase64 mimeType="image/svg+xml" />
  );
  fireEvent.mouseOver(getByTestId("thumbnailImage"));
  expect(getByTestId("fullImage")).toBeVisible();
  expect(baseElement.querySelector("img[data-testid='fullImage']").src).toBe(
    `data:image/svg+xml;base64,${rowDataMock.image}`
  );
  fireEvent.mouseLeave(getByTestId("thumbnailImage"));
  expect(queryByTestId("fullImage")).not.toBeInTheDocument();
});
```