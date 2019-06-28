Today I have [readed](https://medium.freecodecamp.org/a-quick-but-complete-guide-to-indexeddb-25f030425501) about **IndexedDB**, an alternative to Cookies and DOM storate (term commonly that identifies **local storage** and **session storage**).

### Czwartek 27.06.2019

- [Losing .bind(this) in React](https://medium.com/@nikolalsvk/loosing-bind-this-in-react-8637ebf372cf)

	:u6307: Keep in mind that this can affect two things. First thing is **memory and performance**. When you use a class field to define a function, your method resides on **each instance of the class** and NOT on the prototype as it does using the bind method. You can read about this in depth in a great article by Donavon West - [“Demystifying Memory Usage using ES6 React Classes“](https://medium.com/dailyjs/demystifying-memory-usage-using-es6-react-classes-d9d904bc4557).

- [Things to stop/start doing in React](https://medium.com/technical-credit/things-to-stop-start-doing-in-react-9887b9f6cea6)
- [Index as a key is an anti-pattern](https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318)
- [What is Redux-Saga?](https://engineering.universe.com/what-is-redux-saga-c1252fc2f4d1)

	:u6307: “Contrary to redux thunk, you don’t end up in callback hell, you can test your asynchronous flows easily and your actions stay pure.”

- [Redux nowadays : From actions creators to sagas](https://riad.blog/2015/12/28/redux-nowadays-from-actions-creators-to-sagas/)

	:u6307: This is one of the simplest thunk action creator we could write with redux
	```javascript
	function loadTodos() {
		return dispatch => {
			dispatch({ type: 'FETCHING_TODOS' });
			fetch('/todos').then(todos => {
			dispatch({ type: 'FETCHED_TODOS', payload: todos });
			});
		}
	}
	```
	And this is Saga equivalent of the code above
	```javascript
	import { call, put } from 'redux-saga';

	function* loadTodos() {
		yield put({ type: 'FETCHING_TODOS' });
		const todos = yield call(fetch, '/todos');
		yield put({ type: 'FETCHED_TODOS', payload: todos });
	}
	```

- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

	:u6307: An immutable object is an object that can’t be modified after it’s created.

	:u6307: A side effect is any application state change that is observable outside the called function other than its return value.

### Piątek 28.06.2019

- [What is the difference between visibility:hidden and display:none?](https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone)

	**display:none** means that the tag in question will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags.

	**visibility:hidden** means that unlike display:none, the tag is not visible, but **space is allocated** for it on the page. The tag is rendered, it just isn't seen on the page.

- [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)

	:u6307: In short, a generator appears to be a function but it behaves like an iterator.

	:u6307: We can also **return** from a generator. However, return sets the **done** property to **true**

	:u6307: generators and combinator function
	```javascript
	function * take(n, iter) {
		let index = 0;
		for (const val of iter) {
			if (index >= n) {
				return;
			}
			index = index + 1;
			yield val;
		}
	}
	take(3, ['a', 'b', 'c', 'd', 'e'])
	// a b c
	take(7, naturalNumbers());
	// 1 2 3 4 5 6 7
	take(5, powerSeries(3, 2));
	// 9 16 25 36 49
	```
