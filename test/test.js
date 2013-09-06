var assert = require('assert');
var should = require('should');

describe('guess', function() {
  var guess = require('./../guess');

  context('male name', function() {
    var result = guess.gender('Don Draper');
    it('should guess male gender', function() {
      result['gender'].should.equal('male');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });

  context('female name', function() {
    var result = guess.gender('Betty Draper');
    it('should guess female gender', function() {
      result['gender'].should.equal('female');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });

  context('unknown name', function() {
    var result = guess.gender('Mad Men');
    it('should have unknown gender', function() {
      result['gender'].should.equal('unknown');
    });
    it('should have a null confidence', function() {
      assert.equal(result['confidence'], null);
    });
    });

  context('empty name', function() {
    var result = guess.gender('');
    it('should have unknown gender', function() {
      result['gender'].should.equal('unknown');
    });
    it('should have a null confidence', function() {
      assert.equal(result['confidence'], null);
    });
    });

  context('last name, first name', function() {
    var result = guess.gender('Harris, Joan');
    it('should guess female gender', function() {
      result['gender'].should.equal('female');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });
})
