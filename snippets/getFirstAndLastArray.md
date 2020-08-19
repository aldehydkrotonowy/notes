
extract first and last element from array;
```js
let a = [
    {id: 1, name: "tttt"},
    {id: 1, name: "aaa"},
    {id: 1, name: "aaa"},
    {id: 1, name: "aaa"},
    {id: 1, name: "aaa"},
    {id: 1, name: "www"}
];


const { 0: first, length, [length - 1]: last } = a;


console.log(first, last)
```