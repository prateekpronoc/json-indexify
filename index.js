'use strict';

/**
 * Adds commas to a number
 * @param {number} array
 * @param {string} propertyOne
 * @param {string} propertyTwo
 * @return {json} 
 */
var _ = require('lodash');
module.exports = (array, propertyOne, propertyTwo) => {
    return _.zipObject(_.map(array, propertyOne), _.map(array, propertyTwo));
};