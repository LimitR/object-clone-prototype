# object-clone-prototype

# Install
```shell
> npm i object-clone-prototype
```

# Use
```js
const clone = require('object-clone-prototype')

const obj = {key: 'value'}

clone(obj)

Object.defineProperty(obj, 'new', {
        value: 'hello',
        writable: true,
        enumerable: false
})

const new_obj = obj.clone()
//or
const new_obj = clone(obj) // obj.clone() === clone(obj)

console.log(new_obj, new_obj.new) // {key: 'value}, 'hello'

//or

const new_obj = obj.clone(false) // immutable and ignore descriptors

console.log(new_obj, new_obj.new) // {key: 'value}, undefined
```