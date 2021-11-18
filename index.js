'use strict'
module.exports = (
    function () {
        Array.from(arguments).forEach((element)=>{
            Object.defineProperty(element, 'clone', {
                value: function (writable = true) {
                    if (typeof this === 'object') {
                        return  chekObject(this, writable)
                    }
                },
                writable: true,
                enumerable: false
            })
        })
        return arguments[0].clone(this)
    }
)

function chekObject(object_value, writable){
    return Object.create(Object.prototype, Object.entries(object_value).reduce((accumulator, [key, value])=>{
        if(Array.isArray(value)){
            if(value.filter((element)=> typeof element === 'object').length > 0
                &&
                value.filter((element)=> !Array.isArray(element))
            ){
                accumulator[key] = {
                    value: [value.filter((element)=> typeof element != 'object'), chekObject(value.filter((element)=> typeof element === 'object'), writable)[0]],
                    enumerable: true,
                    writable: writable
                }
                return accumulator
            }else{
                accumulator[key] = {
                    value: value.slice(),
                    enumerable: true,
                    writable: writable
                }
                return accumulator
            }
        }else if(typeof value === 'object'){
            accumulator[key] = {
                value: chekObject(value, writable),
                enumerable: true,
                writable: writable
            }
            return accumulator
        }else{
            accumulator[key] = {
                value: value,
                enumerable: true,
                writable: writable
            }
            return accumulator
        }
    }, {}))
}