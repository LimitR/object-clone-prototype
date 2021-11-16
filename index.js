module.exports = (function clone (){Object.prototype.clone = function clone(writable = true){
    let new_object = {}
    for (const [key, value] of Object.entries(this)) {
        new_object[key] = {value: value, enumerable: true, writable: writable ? true : false}
    }
    return Object.create(Object.getPrototypeOf(this),  new_object )
}})()