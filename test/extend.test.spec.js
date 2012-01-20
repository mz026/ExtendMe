describe('extendme', function() {
  var extendme = require(__dirname + '/../extendme');

  beforeEach(function() {
    this.addMatchers({
      toBeFunction: function() {
        return (typeof this.actual) == 'function';
      }  
    });  
  });
  it('should pass', function() {
    expect(true).toBeTruthy();  
  });    

  it('should have a function called create', function() {
    expect(extendme.create).toBeFunction();
  });
  it('should be able to create object by seed.', function() {
    var Person = {type: 'person'} 
      , john = extendme.create(Person);

    expect(john.type).toBe('person');
  });
  it('should have a function called clone', function() {
    expect(extendme.clone).toBeFunction();    
  });
  it('should have a function called extend', function() {
    expect(extendme.extend).toBeFunction();
  });
  it('is able to clone an object with plain primitive attrs', function() {
    var target = {
        name: 'Tomi'
      , type: 'ninja'
    } 
      , cloned = extendme.clone(target);

    expect(target).toEqual(cloned);
    expect(target).not.toBe(cloned);
  });
  it('can clone nested object', function() {
    var target = {
        name: 'Tomi'
      , type: 'ninja'
      , like: {
          food: 'meat'
        , sport: 'ski'
        , woman: {
          hair: 'black'
          , eyes: 'green'
        }
      }
    };    
    var cloned = extendme.clone(target);

    expect(cloned === target).toBeFalsy();
    expect(cloned.like === target.like).toBeFalsy();
    expect(cloned.like.woman === target.like.woman).toBeFalsy();

    expect(target).toEqual(cloned);
  });

  it('can clone array of primitive type', function() {
    var target = ['hola', 'dude', 'yaya'];    
    var cloned = extendme.clone(target);

    expect(target).toEqual(cloned);
    expect(target).not.toBe(cloned);
  });

  it('can clone array with objects', function() {
    var target = [{
      hello: 'dude'
      , like: {
        food: 'burger'
        , sport: 'fight'
      }
    }, 'dude', 'yaya'];    
    var cloned = extendme.clone(target);

    expect(target).toEqual(cloned);
    expect(target).not.toBe(cloned);
  });

  it('can clone object with arrays.', function() {
    var target = {
      colors: ['red', 'blue', 'green']
      , name: 'rainbow'
      , looks: 'beautiful'
    };    
    var cloned = extendme.clone(target);

    expect(target).toEqual(cloned);
    expect(target).not.toBe(cloned);
  });
  it('should be able to extend a seed.', function() {
    var Person = {type: 'person'} 
      , ninjaFeature = {occupation: 'ninja'}

    var Ninja = extendme.extend(Person, ninjaFeature);
      
    expect(extendme.create(Ninja).occupation).toBe('ninja');
  });
});
