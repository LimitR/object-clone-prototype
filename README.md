# object-clone-prototype

#Install
```shell
npm i object-clone-prototype
```

#Use
```javascript
require('object-clone-prototype')

const obj = {key: 'value'}

const new_obj = obj.clone()
//or
const new_obj = obj.clone(false) // immutable
```