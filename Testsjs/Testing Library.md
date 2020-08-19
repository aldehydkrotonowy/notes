React Testing Library re-exports everything from **DOM Testing Library** as well as these methods:
- render
- cleanup
- act

[source](https://testing-library.com/docs/react-testing-library/api#render)


##### render
```js
function render(
  ui: React.ReactElement<any>,
  options?: {
    /* You won't often use this, expand below for docs on options */
  }
): RenderResult
```

- options
	- container
	- baseElement
	- hydrate
	- wrapper
	- queris 
- properties on returned obj
	- ...queries
	- container
	- baseElement
	- debug
	- rerender
	- unmount
	- asFragment
	- cleanup
	- act

Render into a container which is appended to document.body


