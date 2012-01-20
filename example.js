var extendme = require(__dirname + '/extendme');


var Person = {
    type: 'person'
  , sayHi: function() {
    return 'hello, dude';
  }
};

var person = extendme.create(Person);
console.log(person.sayHi()); // 'hello, dude.'


var Ninja = extendme.extend(Person, {
  type: 'ninja'
  , weapon: 'sword'
  , attack: function() {
    return 'whaaaaa!!!!';
  }
});
var ninja = extendme.create(Ninja);

console.log(ninja.sayHi()); // 'hello dude.'
console.log(ninja.attack()); // 'whaaaaa!!!'
console.log(ninja.type); // 'ninja'
console.log(ninja.weapon); // 'sword'

