'use strict'
module.exports = (
    /**
     * @param {Boolean} [writable]
     */
    Object.defineProperty(Object.prototype, 'clone',{
        value: function (writable = true) {
            if (Array.isArray(this)){
                return Array.from(this)
            }
            if (typeof this === 'function'){
                return this.bind(this)
            }
            if (typeof this === 'object'){
                if(writable === true ){
                    return Object.create(Object.getPrototypeOf(this), Object.getOwnPropertyDescriptors(this) )
                }else {
                    return Object.create(Object.getPrototypeOf(this), Object.entries(this).reduce((accumulator, [key, value]) => {
                        accumulator[key] = {value: value, enumerable: true, writable: writable === true? true : false}
                        return accumulator
                    }, {}))
                }
            }
        },
        writable: false,
        enumerable: false
    })
)