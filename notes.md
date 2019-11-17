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

### Friday 28.06.2019

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
### Saturday 28.06.2019
- [What is the meaning of *[Symbol.iterator] in this context](https://stackoverflow.com/questions/36976832/what-is-the-meaning-of-symbol-iterator-in-this-context)

    :u6307: So your code basically means that the iterator of NumbersFromOne is defined as a generator. Instead of manually having to define a function which returns a next and other properties:
    ```javascript
    var NumbersFromOne = {
        *[Symbol.iterator] () {
            for (let i = 1;; ++i) yield i;
      }
    };
  ```

- [A Simple Guide to ES6 Iterators in JavaScript with Examples](https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e)

  :u6307: myFavouriteAuthors iterable
  ```javascript
  const myFavouriteAuthors = {
    allAuthors: {
      fiction: [
        'Agatha Christie', 
        'J. K. Rowling',
        'Dr. Seuss'
      ],
      scienceFiction: [
        'Neal Stephenson',
        'Arthur Clarke',
        'Isaac Asimov', 
        'Robert Heinlein'
      ],
      fantasy: [
        'J. R. R. Tolkien',
        'J. K. Rowling',
        'Terry Pratchett'
      ],
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
              done: true
            };
          }
          
          // if everything is correct, return the author from the current genre and incerement the currentAuthorindex so next time, the next author can be returned.
          return {
            value: genres[currentGenreIndex][currentAuthorIndex++],
            done: false
          }
        }
      };
    }
  };
  ```

### Sunday 30.06.2019

- [How to use JavaScript Proxies for Fun and Profit](https://medium.com/dailyjs/how-to-use-javascript-proxies-for-fun-and-profit-365579d4a9f8)

  :u6307: example 1
  ```javascript
  const { METHODS } = require('http')
  const api = new Proxy({},
    {
      get(target, propKey) {
        const method = METHODS.find(method => 
          propKey.startsWith(method.toLowerCase()))
        if (!method) return
        const path =
          '/' +
          propKey
            .substring(method.length)
            .replace(/([a-z])([A-Z])/g, '$1/$2')
            .replace(/\$/g, '/$/')
            .toLowerCase()
        return (...args) => {
          const finalPath = path.replace(/\$/g, () => args.shift())
          const queryOrBody = args.shift() || {}
          // You could use fetch here
          // return fetch(finalPath, { method, body: queryOrBody })
          console.log(method, finalPath, queryOrBody)
        }
      }
    }
  )
  // GET /
  api.get()
  // GET /users
  api.getUsers()
  // GET /users/1234/likes
  api.getUsers$Likes('1234')
  // GET /users/1234/likes?page=2
  api.getUsers$Likes('1234', { page: 2 })
  // POST /items with body
  api.postItems({ name: 'Item name' })
  // api.foobar is not a function
  api.foobar()
  ```

  :u6307: example 2
  ```javascript
  const camelcase = require('camelcase')
  const prefix = 'findWhere'
  const assertions = {
    Equals: (object, value) => object === value,
    IsNull: (object, value) => object === null,
    IsUndefined: (object, value) => object === undefined,
    IsEmpty: (object, value) => object.length === 0,
    Includes: (object, value) => object.includes(value),
    IsLowerThan: (object, value) => object === value,
    IsGreaterThan: (object, value) => object === value
  }
  const assertionNames = Object.keys(assertions)
  const wrap = arr => {
    return new Proxy(arr, {
      get(target, propKey) {
        if (propKey in target) return target[propKey]
        const assertionName = assertionNames.find(assertion =>
          propKey.endsWith(assertion))
        if (propKey.startsWith(prefix)) {
          const field = camelcase(
            propKey.substring(prefix.length,
              propKey.length - assertionName.length)
          )
          const assertion = assertions[assertionName]
          return value => {
            return target.find(item => assertion(item[field], value))
          }
        }
      }
    })
  }
  const arr = wrap([
    { name: 'John', age: 23, skills: ['mongodb'] },
    { name: 'Lily', age: 21, skills: ['redis'] },
    { name: 'Iris', age: 43, skills: ['python', 'javascript'] }
  ])
  console.log(arr.findWhereNameEquals('Lily')) // finds Lily
  console.log(arr.findWhereSkillsIncludes('javascript')) // finds Iris
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
--------------------------------------------------------------------------------------------------------------------
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

        <p id="p1" draggable ondragstart="dragstart_handler(event)">This element is draggable.</p>
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
- [(.*.*=.*) - Cloudflare prombems and nice analysis](https://blog.cloudflare.com/details-of-the-cloudflare-outage-on-july-2-2019/)

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