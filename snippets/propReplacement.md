```javascript
renameObjProp = (oldProp, newProp, { [oldProp]: oldVal, ...others }) => ({
    [newProp]: oldVal,
    ...others
  });
```