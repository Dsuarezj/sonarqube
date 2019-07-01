var { hola, hola2 } = require('../src/pepe');
var assert = require('assert');

describe('Pepe hola', function() {
  it('should return hola con nombre', function() {
    assert.equal(hola('Denisse'), 'Hola Denisse');
    assert.equal(hola2('Mateo'), 'Hola Mateo');
  });
});
