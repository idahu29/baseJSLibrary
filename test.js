var chai = require('chai');
var assert = chai.assert;
var should = chai.should;
var expect = chai.expect;

var lib = require('./lib.js');

var dict = {a:1, b:2} 
var array = [{name: 'a', value: 1}, {name: 'b', value: 2}]
describe('Dictionary To Array', function(){
  describe('get Base Dictionary', function(){
    it("should show [{name: 'a', value: 1}, {name: 'b', value: 2}]", function(){
      expect(array).to.deep.equal(lib.baseDictToArray(dict))
    })
  })
});