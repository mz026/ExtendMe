/**
 *  extendme.js
 *  prototype inheritence tool.
 *
 *  usage:
 *  1. create: create an object with a seed.
 *  var Person = {
 *    type: 'Person'
 *    , sayHi: function() {
 *      alert('hi');
 *    }
 *  };
 *  
 *  var person = extendme.create(Person);
 *  person.sayHi(); // 'hi'
 *
 *  2. extend: extend a seed.
 *  var Spanish 
 *    = extendme.extend(Person, {
 *      sayHi: function() {
 *        alert('hola!');
 *      }
 *    });
 *  var diago = extendme.create(Spanish);
 *  diago.sayHi(); // 'hola!'
 */

(function(exports) {
  exports.create = function(seed) {
    var F = function(){};
    F.prototype = seed;

    return new F();
  };
  var clone = exports.clone = function(target) {
    var toReturn;

    if (typeof target === 'string' 
      || typeof target === 'number'
      || typeof target === 'function') {
      return target;
    }
    if (target instanceof Array) {
      toReturn = [];
      target.forEach(function(ele, idx, arr) {
        toReturn.push(clone(ele));    
      });
    } else {
      toReturn = {};
      for (key in target) {
        if (target.hasOwnProperty(key)){
          toReturn[key] = clone(target[key]);
        } 
      }
    }
    return toReturn;
  };
  exports.extend = function(destination, source) {
    var toReturn = clone(destination);

    for(key in source) {
      if (source.hasOwnProperty(key)) {
        toReturn[key] = clone(source[key]);
      }
    } 
    return toReturn;
  };
})(module.exports);
