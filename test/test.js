var assert = require('assert');
var should = require('should');

describe('gender', function() {
  var gender = require('./../gender');

  context('guess male name', function() {
    var result = gender.guess('Don Draper');
    it('should guess male gender', function() {
      result['gender'].should.equal('male');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });

  context('guess female name', function() {
    var result = gender.guess('Betty Draper');
    it('should guess female gender', function() {
      result['gender'].should.equal('female');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });

  context('guess unknown name', function() {
    var result = gender.guess('Mad Men');
    it('should have unknown gender', function() {
      result['gender'].should.equal('unknown');
    });
    it('should have a null confidence', function() {
      assert.equal(result['confidence'], null);
    });
    });

  context('guess empty name', function() {
    var result = gender.guess('');
    it('should have unknown gender', function() {
      result['gender'].should.equal('unknown');
    });
    it('should have a null confidence', function() {
      assert.equal(result['confidence'], null);
    });
    });

  context('guess last name, first name', function() {
    var result = gender.guess('Harris, Joan');
    it('should guess female gender', function() {
      result['gender'].should.equal('female');
    });
    it('should have a high confidence', function() {
      result['confidence'].should.be.within(.95, 1.0);
    });
  });
})
