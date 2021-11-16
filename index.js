'use strict'
module.exports = (
    Object.prototype.clone = function clone(writable = true){
        if (Array.isArray(this)){
            return Array.from(this)
        }
        if (typeof this === 'function'){
            return this.bind(this)
        }
        if (typeof this === 'object'){
            return Object.create(Object.getPrototypeOf(this), Object.entries(this).reduce((accumulator, [key, value])=>{
                accumulator[key] = {value: value, enumerable: true, writable: writable ? true : false}
                return accumulator
            }, {}) )
        }
    }
)