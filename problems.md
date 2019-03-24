
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