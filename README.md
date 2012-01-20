Extendme!!!
=======
A dummy prototype inheritance tool for javascript.

Installation:
----
### For nodeJS:
Require the file and you are done:

``var extendme = require('/path/to/extendme.js');``

### For browser: (not implement yet)
Simply include the ``extendme.js`` file, it would add ``extendme`` under ``window`` namespace.

Usage:
------
To create a type of object:

    var Person = {
        type: 'person'
      , sayHi: function() {
        return 'hello, dude';
      }
    };

    var person = extendme.create(Person);
    person.sayHi(); // 'hello, dude.'


To extend a type of object:

    var Ninja = extendme.extend(Person, {
      type: 'ninja'
      , weapon: 'sword'
      , attack: function() {
        return 'whaaaaa!!!!';
      }
    });
    var ninja = extendme.create(Ninja);

    ninja.sayHi(); // 'hello dude.'
    ninja.attack(); // 'whaaaaa!!!'
    console.log(ninja.type); // 'ninja'
    console.log(ninja.weapon); // 'sword'


That's it, **ENJOY!!!**
