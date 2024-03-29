:fallen_leaf: - duplicated in other files

### Thursday 27.06.2019

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
    return (dispatch) => {
      dispatch({ type: "FETCHING_TODOS" });
      fetch("/todos").then((todos) => {
        dispatch({ type: "FETCHED_TODOS", payload: todos });
      });
    };
  }
  ```

  And this is Saga equivalent of the code above

  ```javascript
  import { call, put } from "redux-saga";

  function* loadTodos() {
    yield put({ type: "FETCHING_TODOS" });
    const todos = yield call(fetch, "/todos");
    yield put({ type: "FETCHED_TODOS", payload: todos });
  }
  ```

- [Master the JavaScript Interview: What is Functional Programming?](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0)

  :u6307: An immutable object is an object that can’t be modified after it’s created.

  :u6307: A side effect is any application state change that is observable outside the called function other than its return value.

### Friday 28.06.2019

- [What is the difference between visibility:hidden and display:none?](https://stackoverflow.com/questions/133051/what-is-the-difference-between-visibilityhidden-and-displaynone)

  **display:none** means that the tag in question will not appear on the page at all (although you can still interact with it through the dom). There will be no space allocated for it between the other tags.

  **visibility:hidden** means that unlike display:none, the tag is not visible, but **space is allocated** for it on the page. The tag is rendered, it just isn't seen on the page.

- [Understanding Generators in ES6 JavaScript with Examples](https://codeburst.io/understanding-generators-in-es6-javascript-with-examples-6728834016d5)

  :u6307: In short, a generator appears to be a function but it behaves like an iterator.

  :u6307: We can also **return** from a generator. However, return sets the **done** property to **true**

  :u6307: generators and combinator function

  ```javascript
  function* take(n, iter) {
    let index = 0;
    for (const val of iter) {
      if (index >= n) {
        return;
      }
      index = index + 1;
      yield val;
    }
  }
  take(3, ["a", "b", "c", "d", "e"]);
  // a b c
  take(7, naturalNumbers());
  // 1 2 3 4 5 6 7
  take(5, powerSeries(3, 2));
  // 9 16 25 36 49
  ```

### Saturday 28.06.2019

- [What is the meaning of \*[Symbol.iterator] in this context](https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context)

  :u6307: So your code basically means that the iterator of NumbersFromOne is defined as a generator. Instead of manually having to define a function which returns a next and other properties:

  ```javascript
  var NumbersFromOne = {
    *[Symbol.iterator]() {
      for (let i = 1; ; ++i) yield i;
    },
  };
  ```

- [A Simple Guide to ES6 Iterators in JavaScript with Examples](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e)

  :u6307: myFavouriteAuthors iterable

  ```javascript
  const myFavouriteAuthors = {
    allAuthors: {
      fiction: ["Agatha Christie", "J. K. Rowling", "Dr. Seuss"],
      scienceFiction: [
        "Neal Stephenson",
        "Arthur Clarke",
        "Isaac Asimov",
        "Robert Heinlein",
      ],
      fantasy: ["J. R. R. Tolkien", "J. K. Rowling", "Terry Pratchett"],
    },
    [Symbol.iterator]() {
      // Get all the authors in an array
      const genres = Object.values(this.allAuthors);

      // Store the current genre and author index
      let currentAuthorIndex = 0;
      let currentGenreIndex = 0;

      return {
        // Implementation of next()
        next() {
          // authors according to current genre index
          const authors = genres[currentGenreIndex];

          // doNotHaveMoreAuthors is true when the authors array is exhausted.
          // That is, all items are consumed.
          const doNothaveMoreAuthors = !(currentAuthorIndex < authors.length);
          if (doNothaveMoreAuthors) {
            // When that happens, we move the genre index to the next genre
            currentGenreIndex++;
            // and reset the author index to 0 again to get new set of authors
            currentAuthorIndex = 0;
          }

          // if all genres are over, then we need tell the iterator that we can not give more values.
          const doNotHaveMoreGenres = !(currentGenreIndex < genres.length);
          if (doNotHaveMoreGenres) {
            // Hence, we return done as true.
            return {
              value: undefined,
              done: true,
            };
          }

          // if everything is correct, return the author from the current genre and incerement the currentAuthorindex so next time, the next author can be returned.
          return {
            value: genres[currentGenreIndex][currentAuthorIndex++],
            done: false,
          };
        },
      };
    },
  };
  ```

### Sunday 30.06.2019

- [How to use JavaScript Proxies for Fun and Profit](https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8)

  :u6307: example 1

  ```javascript
  const { METHODS } = require("http");
  const api = new Proxy(
    {},
    {
      get(target, propKey) {
        const method = METHODS.find((method) =>
          propKey.startsWith(method.toLowerCase())
        );
        if (!method) return;
        const path =
          "/" +
          propKey
            .substring(method.length)
            .replace(/([a-z])([A-Z])/g, "$1/$2")
            .replace(/\$/g, "/$/")
            .toLowerCase();
        return (...args) => {
          const finalPath = path.replace(/\$/g, () => args.shift());
          const queryOrBody = args.shift() || {};
          // You could use fetch here
          // return fetch(finalPath, { method, body: queryOrBody })
          console.log(method, finalPath, queryOrBody);
        };
      },
    }
  );
  // GET /
  api.get();
  // GET /users
  api.getUsers();
  // GET /users/1234/likes
  api.getUsers$Likes("1234");
  // GET /users/1234/likes?page=2
  api.getUsers$Likes("1234", { page: 2 });
  // POST /items with body
  api.postItems({ name: "Item name" });
  // api.foobar is not a function
  api.foobar();
  ```

  :u6307: example 2

  ```javascript
  const camelcase = require("camelcase");
  const prefix = "findWhere";
  const assertions = {
    Equals: (object, value) => object === value,
    IsNull: (object, value) => object === null,
    IsUndefined: (object, value) => object === undefined,
    IsEmpty: (object, value) => object.length === 0,
    Includes: (object, value) => object.includes(value),
    IsLowerThan: (object, value) => object === value,
    IsGreaterThan: (object, value) => object === value,
  };
  const assertionNames = Object.keys(assertions);
  const wrap = (arr) => {
    return new Proxy(arr, {
      get(target, propKey) {
        if (propKey in target) return target[propKey];
        const assertionName = assertionNames.find((assertion) =>
          propKey.endsWith(assertion)
        );
        if (propKey.startsWith(prefix)) {
          const field = camelcase(
            propKey.substring(
              prefix.length,
              propKey.length - assertionName.length
            )
          );
          const assertion = assertions[assertionName];
          return (value) => {
            return target.find((item) => assertion(item[field], value));
          };
        }
      },
    });
  };
  const arr = wrap([
    { name: "John", age: 23, skills: ["mongodb"] },
    { name: "Lily", age: 21, skills: ["redis"] },
    { name: "Iris", age: 43, skills: ["python", "javascript"] },
  ]);
  console.log(arr.findWhereNameEquals("Lily")); // finds Lily
  console.log(arr.findWhereSkillsIncludes("javascript")); // finds Iris
  ```

### Monday 01.07.2019

- [A Beginner's Guide to LSTMs and Recurrent Neural Networks](https://skymind.ai/wiki/lstm)

### Wednesday 03.07.2019

- [Testing in React with Jest and Enzyme: An Introduction](https://medium.com/@rossbulat/testing-in-react-with-jest-and-enzyme-an-introduction-99ce047dfcf8)

### Sunday 07.07.2019

- [Checking for Keyboard Events in JavaScript with Cross-Browser Support](https://medium.com/@uistephen/keyboardevent-key-for-cross-browser-key-press-check-61dbad0a067a)

  :u6307: Prefer the use of document over window when adding event listeners.
  :u6307: calling **preventDefault** on the event elsewhere would have prevented the event from reaching this function.

  ```javascript
  <script>
  document.addEventListener('keyup', function (event) {
      if (event.defaultPrevented) {
          <!-- Inside the add listener function, let’s determine if we should be seeing this event at all. If another event handler has already captured this event and prevented its default behavior, we don’t want to do anything with it, probably. To be honest, I was surprised to see this recommended. I would have expected that calling preventDefault on the event elsewhere would have prevented the event from reaching this function. I’m curious if anyone knows for sure what the behavior is and how necessary it is to include this. Since it doesn’t hurt anything, I’m including it anyway. -->
          return;
      }
      let key = event.key || event.keyCode;
      if (key === 'Escape' || key === 'Esc' || key === 27) {
          doWhateverYouWantNowThatYourKeyWasHit();
      }
  });
  </script>
  ```

- [HTML Global atribbutes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/accesskey)

  :u6307: tabindex, accesskey

---

- [HTML Drag and Drop API](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
- [Drag Operations](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations#dragdata)
  Making an element draggable requires adding the draggable attribute and the ondragstart global event handler, as shown in the following code sample:

  ```html
  <script>
    function dragstart_handler(ev) {
      // Add the target element's id to the data transfer object
      ev.dataTransfer.setData("text/plain", ev.target.innerText);
    }
  </script>

  <p id="p1" draggable ondragstart="dragstart_handler(event)">
    This element is draggable.
  </p>
  ```

### Monday 08.072019

- [what is backing instance](https://stackoverflow.com/questions/37750207/what-is-a-backing-instance-in-react)

  :u6307: A backing instance is the object in memory which represents the node. This is where things like the state are usually stored.

- [React: Inheritance vs Composition](https://pl.reactjs.org/docs/composition-vs-inheritance.html)

### Wednesday 10.07.2019

- [arrow function in render()](https://frontarm.com/james-k-nelson/when-to-use-arrow-functions/)

:u6307: If you use arrow functions within render, each call to render will create new function objects. If you then pass these functions to child elements via props, optimizations based on PureComponent or shouldComponentUpdate will fail (as the arrow function props will change on every render).

- If your environment supports arrow methods, you can use them for all methods.
- Use arrow functions within render. It’s ok. I promise.
- If performance becomes an issue, check whether arrow functions are causing PureComponent or shouldComponentUpdate to make unnecessary updates.

- :green_heart: [Material UI examples](https://github.com/marmelab/react-admin/blob/master/docs/List.md)

### Saturday 13.07.2019

##### Stencil.js

- [An Introduction to Stencil.js](https://medium.com/dailyjs/an-introduction-into-stencil-js-a08e41e2102)
- [Web Components with Stencil.js](https://medium.com/mug/web-components-with-stencil-js-is-it-the-best-way-to-create-reusable-ui-elements-in-2018-7916e8f973e8)
- [Custom elements API](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)

### Sunday 14.07.2019

##### RegExp DoS

- [Atak DoS na aplikacje – przez wyrażenia regularne](https://sekurak.pl/atak-dos-na-aplikacje-przez-wyrazenia-regularne/)
- [(._._=.\*) - Cloudflare prombems and nice analysis](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/)

### Sunday 20.07.2019

##### functional porgraming

- [Thinking Ramda](http://randycoulman.com/blog/2016/05/24/thinking-in-ramda-getting-started/);

### Friday 26.07.2019

##### JS and C++

- [JavaScript ♥ C++](https://medium.com/netscape/javascript-c-modern-ways-to-use-c-in-javascript-projects-a19003c5a9ff)
- [JavaScript ♥ C++ - git repo](https://github.com/zandaqo/iswasmfast/blob/master/lib/levenstein.cpp)

  :u6307: The classic Node.js C++ Addon API exposes the underlying components of Node.js such as V8 and libuv which makes it powerful yet fragile since changes in the components can break the addons relying on them. Developers have to recompile and often update their C++ addons with every new version of Node.js. To solve this and other issues, Node.js is introducing new N-API that is independent from the underlying JavaScript runtime (e.g. V8) and promises a stable binary interface (ABI) across Node.js versions.

- [Pragmatic compiling of C++ to WebAssembly. A Guide.](https://medium.com/@tdeniffel/pragmatic-compiling-from-c-to-webassembly-a-guide-a496cc5954b8)

### Saturday 28.07.19

##### Scrollbars problems

- [How to fight the &lt;body&gt; scroll](https://medium.com/react-camp/how-to-fight-the-body-scroll-2b00267b37ac)
- [Using "window" the React Way with react-fns](https://alligator.io/react/declarative-html5-apis-react-fns/)
- [:cyclone: React - SyntheticEvent](https://reactjs.org/docs/events.html#ui-event)

##### React hooks

- [:cyclone: awesome-react-hooks](https://github.com/rehooks/awesome-react-hooks)
- [:cyclone: usehooks.com](https://usehooks.com/)

### Wednesday 31.07.19

- [Demystifying Entropy](https://medium.com/activating-robotic-minds/demystifying-entropy-f2c3221e2550)

  :u6307: If entropy is high (encoding size is big on average), it means we have many message types with small probabilities. Hence, every time a new message arrives, you’d expect a different type than previous messages. You may see it as a disorder or uncertainty or unpredictability.

- [Coding Neural Network — Forward Propagation and Backpropagtion](https://towardsdatascience.com/coding-neural-network-forward-propagation-and-backpropagtion-ccf8cf369f76)

### Wednesday 06.08.19

- [What is Flutter](https://medium.com/@leancode/czym-jest-flutter-i-dlaczego-warto-si%C4%99-nim-zainteresowa%C4%87-7b6a11d41e67)
- [Flutter vs React Nativ](https://www.thedroidsonroids.com/blog/flutter-vs-react-native-what-to-choose-in-2019)

### Sunday 11.08.19

- [The 5 Clustering Algorithms Data Scientists Need to Know](https://towardsdatascience.com/the-5-clustering-algorithms-data-scientists-need-to-know-a36d136ef68)

### Thursday 15.08.19

- [No, Machine Learning is not just glorified Statistics](https://towardsdatascience.com/no-machine-learning-is-not-just-glorified-statistics-26d3952234e3)
- [The 10 Deep Learning Methods AI Practitioners Need to Apply](https://medium.com/cracking-the-data-science-interview/the-10-deep-learning-methods-ai-practitioners-need-to-apply-885259f402c1) - :fallen_leaf: ml

### Saturday 17.08.19

- [Understanding the Covariance Matrix](https://datascienceplus.com/understanding-the-covariance-matrix/)
- [Singular value decomposition](https://en.wikipedia.org/wiki/Singular_value_decomposition)
- [Rotation Matrices](http://www.ambrsoft.com/Equations/Matrix/Matrix.htm)
- [Principal component analysis](https://en.wikipedia.org/wiki/Principal_component_analysis)
- [A step by step explanation of Principal Component Analysis](https://towardsdatascience.com/a-step-by-step-explanation-of-principal-component-analysis-b836fb9c97e2)
- [Ten Machine Learning Algorithms You Should Know to Become a Data Scientist](https://www.datasciencecentral.com/profiles/blogs/ten-machine-learning-algorithms-you-should-know-to-become-a-data)

### Monday 02.09.19

- [Artificial Intelligence: Salaries Heading Skyward](https://medium.com/towards-artificial-intelligence/artificial-intelligence-salaries-heading-skyward-e41b2a7bba7d)

### Saturday 07.09.19

- [Neural Networks, Manifolds, and Topology](https://colah.github.io/posts/2014-03-NN-Manifolds-Topology/)
- [Understanding LSTM Networks](https://colah.github.io/posts/2015-08-Understanding-LSTMs/)
- [A Gentle Introduction to the Rectified Linear Unit (ReLU)](https://machinelearningmastery.com/rectified-linear-activation-function-for-deep-learning-neural-networks/)
- [Deep Learning, NLP, and Representations](https://colah.github.io/posts/2014-07-NLP-RNNs-Representations/)
- [Illustrated Guide to LSTM’s and GRU’s: A step by step explanation](https://towardsdatascience.com/illustrated-guide-to-lstms-and-gru-s-a-step-by-step-explanation-44e9eb85bf21)
- [Attention and Augmented Recurrent Neural Networks](https://distill.pub/2016/augmented-rnns/)
- [An introduction to Attention](https://towardsdatascience.com/an-introduction-to-attention-transformers-and-bert-part-1-da0e838c7cda)
- [Attention in Neural Networks](https://towardsdatascience.com/attention-in-neural-networks-e66920838742)
- [How to Develop LSTM Models for Time Series Forecasting](https://machinelearningmastery.com/how-to-develop-lstm-models-for-time-series-forecasting/)
- [An Intro Tutorial for Implementing Long Short-Term Memory Networks (LSTM)](https://heartbeat.fritz.ai/a-beginners-guide-to-implementing-long-short-term-memory-networks-lstm-eb7a2ff09a27)

### Sunday 08.09.19

- [An overview of gradient descent optimization algorithms](http://ruder.io/optimizing-gradient-descent/)
- [An Introduction to AdaGrad](https://medium.com/konvergen/an-introduction-to-adagrad-f130ae871827)

### Thursday 17.09.19

- [What is render prop](https://blog.bitsrc.io/understanding-render-props-in-react-1edde5921314)
- [Render props explained](https://softchris.github.io/pages/react-render-props.html#render-props-explained)

### Saturday 05.10.19

- [A free guide to HTML5 <head> elements](https://htmlhead.dev/#recommended-minimum)

  - [All About Favicons (And Touch Icons)](https://bitsofco.de/all-about-favicons-and-touch-icons/)
  - [Facebook - Open Graph Markup](https://developers.facebook.com/docs/sharing/webmasters#markup)
  - lots of additional links and resources to other &lt;head&gt; elements

- [CSS Grid: illustrated introduction](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5)

### Sunday 06.10.19

- [How Operating Systems Work - basic concepts](https://medium.com/cracking-the-data-science-interview/how-operating-systems-work-10-concepts-you-should-know-as-a-developer-8d63bb38331f)

### Wednesday 08.10.19

- [how to use useEffect hook](https://overreacted.io/a-complete-guide-to-useeffect/)

### Wednesday 12.11.19

- [js observers](https://devszczepaniak.pl/o-obserwatorach-w-javascript/)
- [Flutter Vs. React Native](https://www.codeproject.com/Articles/1280298/A-Comparison-Between-Flutter-And-React-Native)
  - Google released Flutter in May 2017.
- [The Burp Suite family](https://portswigger.net/burp)
  - SECURITY
- [dietpi](https://dietpi.com/phpbb/viewtopic.php?t=5)

### Saturday 16.11.19

- [CSS grid](https://dev.to/mustapha/css-grid-illustrated-introduction-52l5)
- [Nice TypeScript tutorial](https://www.valentinog.com/blog/typescript/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/classes.html)

### Sunday 17.11.19

- [setState and re-rendering](https://itnext.io/react-setstate-usage-and-gotchas-ac10b4e03d60)
  - **setState()** will always lead to a re-render unless **shouldComponentUpdate()** returns false.
- [Handling null and undefined in JavaScript](https://medium.com/javascript-scene/handling-null-and-undefined-in-javascript-1500c65d51ae)
- [Understanding State Machines](https://www.freecodecamp.org/news/state-machines-basics-of-computer-science-d42855debc66/)
  - In other words, neither a regular expression nor a finite state machine can be constructed that will recognize all the strings that do match the pattern.
- [XState - library](https://xstate.js.org/docs/about/concepts.html#finite-state-machines)

### Friday 13.12.19

- [How to use JavaScript Proxies for Fun and Profit](https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8)
- [JS - 31 WeakMaps (WeakMap)](https://exploringjs.com/impatient-js/ch_weakmaps.html)
- [Metaprogramming in ES6: Symbols and why they're awesome](https://www.keithcirkel.co.uk/metaprogramming-in-es6-symbols/)
  - **Duck typing** - The idea is that you don't need a type in order to invoke an existing method on an object - if a method is defined on it, you can invoke it.
  - **Traits** are a way to add semantics to existing types without risking unintentional interference with existing code.
- [Background: Traits](https://github.com/traitsjs/traits.js/#background-traits)
  - a trait is a concept used in object-oriented programming, which represents a set of methods that can be used to extend the functionality of a class.

### Thursday 9.01.20

- [react hooks](https://blog.logrocket.com/frustrations-with-react-hooks/)

### Friday 31.01.20

- [Introducing Background Sync](https://developers.google.com/web/updates/2015/12/background-sync)
- [JavaScript fundamentals before learning React](https://www.robinwieruch.de/javascript-fundamentals-react-requirements)
- [Transakcje w systemach Java Enterprise](http://www.javaexpress.pl/article/show/Transakcje_w_systemach_Java_Enterprise_Wprowadzenie)
- [Writing Your Own Custom React Hooks](https://blog.bitsrc.io/writing-your-own-custom-hooks-4fbcf77e112e)
- [WeekMaps js](https://exploringjs.com/impatient-js/ch_weakmaps.html)
- [Frustrations with React Hooks](https://blog.logrocket.com/frustrations-with-react-hooks/)

### Saturdayy 01.02.20

- [node and event loop](https://blog.soshace.com/advanced-node-js-a-hands-on-guide-to-event-loop-child-process-and-worker-threads-in-node-js/) - child_process, worker thread
- [Node.js multithreading:](https://blog.logrocket.com/node-js-multithreading-what-are-worker-threads-and-why-do-they-matter-48ab102f8b10/)
- [Push Notifications in JavaScript? Yes, you can!](https://itnext.io/an-introduction-to-web-push-notifications-a701783917ce)
- [ESLint configuration and best practices](https://blog.geographer.fr/eslint-guide)
- [You don't (may not) need loops](https://github.com/you-dont-need/You-Dont-Need-Loops/blob/master/readme.md#reduce)
- [Functional Programming in JavaScript, Part 2: The Monoid](https://marmelab.com/blog/2018/04/18/functional-programming-2-monoid.html)

### Sunday 01.03.20

- [productivity](https://guzey.com/productivity/)
- [10 Useful Web APIs for 2020](https://blog.bitsrc.io/10-useful-web-apis-for-2020-8e43905cbdc5)
- [A Guide to Console Commands](https://css-tricks.com/a-guide-to-console-commands/)
- [How To Use The HTML Drag-And-Drop API In React](https://www.smashingmagazine.com/2020/02/html-drag-drop-api-react/)
- [How To Make A Drag-and-Drop File Uploader With Vanilla JavaScript](https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/)
- [hooks - usereducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
- [Intro to PWAs and Service Workers](https://dev.to/thisdotmedia/intro-to-pwa-and-service-workers-15d4)
- [22 PWA Interview Questions Every Developer Should Know in 2020](https://dev.to/fullstackcafe/22-pwa-interview-questions-every-developer-should-know-in-2020-3jfm)

### Tuesday 10.03.20

- [React Native Starter Kits Review for 2020](https://blog.bitsrc.io/react-native-starter-kits-review-for-2020-f683b3607a6e)
- [How to Write and Design User-Friendly Error Messages](https://medium.com/thinking-design/how-to-write-design-user-friendly-error-messages-87d0207bb902)
- [Build Your Own JavaScript Testing Framework](https://blog.bitsrc.io/build-your-own-javascript-testing-framework-377e6583c870)
- [Vanilla Two-Way Binding in JavaScript](https://medium.com/better-programming/js-vanilla-two-way-binding-5a29bc86c787)

### Monday 23.03.20

- [15 Sites for Programming Exercises](https://programmingzen.com/15-sites-for-programming-exercises/)
- [The 10 most popular coding challenge websites for 2020](https://www.freecodecamp.org/news/the-10-most-popular-coding-challenge-websites-of-2016-fb8a5672d22f/)

### Thursday 26.03.20

- [props children cloning](https://frontarm.com/james-k-nelson/passing-data-props-children/)

### Wednesday 13.05.20

- [Cross-Site Request Forgery (CSRF)](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#introduction)

### Sunday 17.05.20

- [Everything You Need to Know to Get Started with Microservices](https://dev.to/microtica/everything-you-need-to-know-to-get-started-with-microservices-5243)
- [Job Control: the Bash Feature You Only Think You Don't Need](https://www.linuxjournal.com/content/job-control-bash-feature-you-only-think-you-dont-need)
- [Creating Morphing Animations with CSS clip-path](https://blog.bitsrc.io/creating-morphing-animations-with-css-clip-path-3c3bf5e4335f)

### Wednesday 3.06.20

- [Cache API in JavaScript](https://medium.com/javascript-dots/cache-api-in-javascript-644380391681)
- [how to manage HTML DOM with vanilla JavaScript only?](https://htmldom.dev/)
- [Create diagrams with code using Graphviz](https://ncona.com/2020/06/create-diagrams-with-code-using-graphviz/)
- [What Is The Best Deno Web Framework?](https://dev.to/craigmorten/what-is-the-best-deno-web-framework-2k69)

### Monday 15.06.20

- [Grid for layout, Flexbox for components](https://ishadeed.com/article/grid-layout-flexbox-components/)
- [33 Concepts Every JavaScript Developer Should Know](https://github.com/leonardomso/33-js-concepts)

### Tuesday 23.06.20

- [Rollup vs Webpack](https://medium.com/jsdownunder/rollup-vs-webpack-javascript-bundling-in-2018-b35758a2268)
- [Uint8Array to string in Javascript](https://stackoverflow.com/questions/8936984/uint8array-to-string-in-javascript)

### Wednesday 08.07.20

- [JavaScript Internals: Under The Hood of a Browser](https://medium.com/better-programming/javascript-internals-under-the-hood-of-a-browser-f357378cc922)

### Sunday 19.07.20

- [Subtyping and coercion in Rust](http://featherweightmusings.blogspot.com/2014/03/subtyping-and-coercion-in-rust.html)
- [Git Submodules vs Git Subtrees](https://martowen.com/2016/05/01/git-submodules-vs-git-subtrees/)
- [Ten modern layouts in one line of CSS](https://web.dev/one-line-layouts/)

### Friday 24.07.20

- [ghidra](https://ghidra-sre.org)
- [ghidra - git](https://github.com/NationalSecurityAgency/ghidra)
- [Build your own React](https://pomb.us/build-your-own-react/)
- [Send data between tabs with JavaScript](https://dev.to/dcodeyt/send-data-between-tabs-with-javascript-2oa)
- [Obsługa płatności online w React + Stripe](https://www.youtube.com/watch?v=MjMh62ZXlOw)
- [5 lessons from 50 days of CSS art](https://dev.to/s_aitchison/5-lessons-from-50-days-of-css-art-2ae1)
- [Brython (Browser Python)](https://github.com/brython-dev/brython)

### Monday 27.07.20

- [Anti reverse engineering](https://www.pelock.com/pl/artykuly/anti-reverse-engineering-wirusy-kontra-antywirusy?p2=53a)
- [How to Implement Login with Google in NestJS](https://levelup.gitconnected.com/how-to-implement-login-with-google-in-nest-js-81b0c584c987)

### Thursday 30.07.20

- [Arrow functions are disrupting React.Components](https://blog.usejournal.com/arrow-functions-are-disrupting-react-components-63662d35f97b)
- [Arrow functions in React](https://medium.com/@oleg008/arrow-functions-in-react-f782d11460b4)

### Wednesday 19.08.20

- [An Introduction to Existential Types](https://medium.com/@stephenebly/an-introduction-to-existential-types-25c130ba61a4)

### Wednesday 26.08.20

- [Persistent data structure](https://en.wikipedia.org/wiki/Persistent_data_structure)
- [In Rust, ordinary vectors are values](http://smallcultfollowing.com/babysteps/blog/2018/02/01/in-rust-ordinary-vectors-are-values/)

### Monday 14.09.20

- [Use Hooks + Context, not React + Redux](https://blog.logrocket.com/use-hooks-and-context-not-react-and-redux/)
- [How to useContext in React?](https://www.robinwieruch.de/react-usecontext-hook)
- [React State Management](https://www.robinwieruch.de/react-state)

### Tuesday 15.09.20

- [React router v5 hooks](https://reacttraining.com/blog/react-router-v5-1/#uselocation)
- [React Top-Level API](https://www.w3resource.com/react/react-top-level-api.php)

### Tuesday 29.09.20

- [Webmentions](https://dev.to/dailydevtips1/goodbye-comments-welcome-webmentions-499g)
- [](https://github.com/muesli/duf)

### Saturday 24.10.20

- [Alternatives for Redux](https://blog.bitsrc.io/redux-react-alternatives-c1733793a339)

### Saturday 07.11.20

- [A programmer's view on digital images: the essentials](https://www.collabora.com/news-and-blog/blog/2016/02/16/a-programmers-view-on-digital-images-the-essentials/#:~:text=The%20usual%20way%20to%20store,row%20has%20coordinates%200%2C0.)
- [Image Stride](https://docs.microsoft.com/en-us/windows/win32/medfound/image-stride?redirectedfrom=MSDN)

### Sunday 13.12.20

- [Please stop using classes in JavaScript](https://everyday.codes/javascript/please-stop-using-classes-in-javascript/)
- [Algorithm - Looping in a spiral](https://stackoverflow.com/questions/398299/looping-in-a-spiral)
- [papers-we-love](https://github.com/papers-we-love)

### Tuesday 12.01.21

- [How to create an accessible React modal](https://tinloof.com/blog/how-to-create-an-accessible-react-modal/)

### Saturday 16.01.21

- [Commits are snapshots, not diffs](https://github.blog/2020-12-17-commits-are-snapshots-not-diffs/)
- [Lerna and Yarn Workspaces is a Perfect Match](https://doppelmutzi.github.io/monorepo-lerna-yarn-workspaces/)
- [Step by Step Guide to create a Typescript Monorepo with Yarn Workspaces and Lerna](https://blog.usejournal.com/step-by-step-guide-to-create-a-typescript-monorepo-with-yarn-workspaces-and-lerna-a8ed530ecd6d)

### Sunday 17.04.21

- [HTTP methods](https://httptoolkit.tech/blog/http-search-method/)
- [html boilerplate with explanation](https://www.matuzo.at/blog/html-boilerplate/)
- [The Cursed Computer Iceberg Meme](https://suricrasia.online/iceberg/)

### Saturday 02.05.2021

- [Starting a TypeScript Project in 2021](https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/) /Typescript/
- [Working With Strings in Modern JavaScript](https://www.baseclass.io/guides/string-handling-modern-js) /JS, strings/

### Wednesday 13.05.2021

- [stores in angular](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/) /Angular, Angular-store/
- [Ngrx Store - An Architecture Guide](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/) /Angular, Angular-store/
- [ngrx.io architecture](https://ngrx.io/guide/data/architecture-overview) /Angular, Angular-store/
- [introduction to reactive programing](https://gist.github.com/staltz/868e7e9bc2a7b8c1f754)

## Sunday 25.08.2021

- [architectures of asynchronous JavaScript](https://www.youtube.com/watch?v=C4ZuJQ_5Ik0) /JS, async/

### Sunday 19.09.2021

- [A GPIO driver in Rust](https://lwn.net/Articles/863459/)
