# object-clone-prototype

# Install
```shell
> npm i object-clone-prototype
```

# Use
```js
require('object-clone-prototype')

const obj = {key: 'value'}

Object.defineProperty(obj, 'new', {
        value: 'hello',
        writable: true,
        enumerable: false
})

const new_obj = obj.clone()

console.log(new_obj, new_obj.new) // {key: 'value}, 'hello'

//or

const new_obj = obj.clone(false) // immutable and ignore descriptors

console.log(new_obj, new_obj.new) // {key: 'value}, undefined
```