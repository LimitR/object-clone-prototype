# object-clone-prototype
_____

# Install
```shell
> npm i object-clone-prototype
```

# Use
```js
const clone = require('object-clone-prototype')

const obj = {key: 'value'} // {key: {key: [ {key: ... ]}}

clone(obj) // clone(obj, obj2, obj3m ... objN)

Object.defineProperty(obj, 'new', {
        value: 'hello',
        writable: true,
        enumerable: false
})

const new_obj = obj.clone()
//or
const new_obj = clone(obj) // obj.clone() === clone(obj) but return 1 value arguments

console.log(new_obj, new_obj.new) // {key: 'value}, 'hello'

//or

const new_obj = obj.clone(false) // immutable and ignore descriptors
//or
const new_obj = clone.bind(false)(obj)

console.log(new_obj, new_obj.new) // {key: 'value}, undefined
```