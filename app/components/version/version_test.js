'use strict';

describe('userApp.version module', function() {
  beforeEach(module('userApp.version'));

  describe('version service', function() {
    it('should return current version', inject(function(version) {
      expect(version).toEqual('0.1');
    }));
  });
});
