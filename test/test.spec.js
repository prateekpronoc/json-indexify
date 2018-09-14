'use strict';

var expect = require('chai').expect;
var indexify = require('../index');

describe('#IndexifyArrayOfJSONObject', function() {
    it('should convert array to json object by property names', function() {
        var result = indexify([{ id: 1, name: 'prateek' }, { id: 2, name: 'Faishal' }], 'id', 'name');
        console.log(result);
        expect(result).to.deep.equal({ 1: 'prateek', 2: 'Faishal' });
    });
});