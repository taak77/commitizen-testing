var chai = require('chai');
var lib = require('../src/index.js');
var expect = chai.expect;

describe('String util', function() {
	describe('- isAlpha()', function() {
      it("should return true if the string contains only letters", function() {
      	expect(lib.isAlpha('afaf')).to.be.true;
      	expect(lib.isAlpha('FJslfjkasfs')).to.be.true;
      	expect(lib.isAlpha('adflj43faljsdf')).to.be.false;
      	expect(lib.isAlpha('33')).to.be.false;
      	expect(lib.isAlpha('')).to.be.false;
      })
    })
});