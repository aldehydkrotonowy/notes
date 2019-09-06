
### Q: What is the difference between these four promises?
```javascript
doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);
```
A: [Answer](https://pouchdb.com/2015/05/18/we-have-a-problem-with-promises.html)


zadanie od Marka
funkcja podaje (tablice i funkcje) i ma działaćtak jak array.map [nie korzytać z funkcji dodatkowych np forEach]