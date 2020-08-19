# Classes
Classes are in fact "special functions", and just as you can define **function expressions** and **function declarations**, the class syntax has two components: **class expressions** and **class declarations**.


- class expression
The class expression is one way to define a class in ECMAScript 2015. Similar to function expressions, class expressions can be named or unnamed. If named, the name of the class is local to the class body only.

```js
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
};
```

- class declaration
The class declaration creates a new class with a given name using prototype-based inheritance.

```js
class Polygon {
  constructor(height, width) {
    this.area = height * width;
  }
}
```
	- Class declarations are not hoisted (unlike function declarations).



