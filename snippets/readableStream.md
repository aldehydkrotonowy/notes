
```js
let fetchJwtToken = async () => {
    fetch(selectedEnvUrl, config)
        .then(({body:readableStream}) => {
            return readableStream.getReader().read();
        })
        .then(({value: uInt8Arr}) => {
            let string = new TextDecoder("utf-8").decode(uInt8Arr);
            return string;
        })
        .then(token => {
            console.log(token);
            let data = {
                url: selectedEnvUrl,
                token: token
            }
            localStorage.setItem("jwtToken", JSON.stringify(data))
        })
}
```
