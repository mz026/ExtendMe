var extendme = require(__dirname + '/extend');


var Person = {
  type: 'Person'
  , sayHi: function() {
    console.log('hi');
  }
};

var person = extendme.create(Person);
person.sayHi(); // 'hi'

var Spanish = extendme.extend(Person, {
                sayHi: function() {
                  console.log('hola!');
                }
              });

var diago = extendme.create(Spanish);
diago.sayHi(); // 'hola!'
