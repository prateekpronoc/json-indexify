'use strict';

var expect = require('chai').expect;
var indexify = require('../index');

describe('#IndexifyArrayOfJSONObject', function() {
    it('should convert array to json object by property names', function() {
        var result = indexify([{ id: 91, value: 'India' }, { id: 1, name: 'USA' }], 'id', 'value');
        console.log(result);
        expect(result).to.deep.equal({91:'India',1:'UDSA'});
    });
});