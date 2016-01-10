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
      });
    });

    describe('- isUpper()', function() {
      it('should return true if the character or string is uppercase', function() {
      	expect(lib.isUpper('a')).to.be.false;
      	expect(lib.isUpper('z')).to.be.false;
      	expect(lib.isUpper('B')).to.be.true;
      	expect(lib.isUpper('HIJP')).to.be.true;
      	expect(lib.isUpper('HelLO')).to.be.false;
      });
    });

    describe('- isLower()', function() {
      it('should return true if the character or string is lowercase', function() {
      	expect(lib.isLower('a')).to.be.true;
      	expect(lib.isLower('z')).to.be.true;
      	expect(lib.isLower('B')).to.be.false;
      	expect(lib.isLower('hijp')).to.be.true;
      	expect(lib.isLower('HelLO')).to.be.false;
      });
    });
});