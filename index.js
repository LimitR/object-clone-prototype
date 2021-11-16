module.exports = (
    Object.prototype.clone = function clone(writable = true){
        if (Array.isArray(this)){
            return Array.from(this)
        }
        if (typeof this === 'function'){
            return this.bind(this)
        }
        if (typeof this === 'object'){
            let new_object = {}
            for (const [key, value] of Object.entries(this)) {
                new_object[key] = {value: value, enumerable: true, writable: writable ? true : false}
            }
            return Object.create(Object.getPrototypeOf(this),  new_object )
        }

    }
)