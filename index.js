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
                enumerable: false,
                configurable: true
            })
        })
        return arguments[0].clone(this)
    }
)

function chekObject(object_value, writable){
    return Object.create(object_value.__proto__, Object.entries(object_value).reduce((accumulator, [key, value])=>{
        if(Array.isArray(value)){
            if(value.filter((element)=> typeof element === 'object').length > 0){
                accumulator[key] = {
                    value: [value.filter((element)=> typeof element != 'object'), chekObject(value.filter((element)=> typeof element === 'object'), writable)]
                        .flat()
                        .map((elment)=>{
                            if(typeof elment === 'object'){
                                return  Object.values(elment)
                            }else {
                                return elment
                            }

                        }).flat(),
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