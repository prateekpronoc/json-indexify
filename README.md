# json-indexify
A small library that indexify the array of json objects

## Installation

  `npm install json-indexify`

## Usage

    var indexify = require('json-indexify');

    var indexifiesObject = indexify([{ id: 91, value: 'India' }, { id: 1, name: 'USA' },'id','value');
  
  
  Output should be `{'1': 'USA', '91': 'India'}`


## Tests

  `npm test`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.


[![Build Status](https://travis-ci.org/prateekpronoc/json-indexify.svg?branch=master)](https://travis-ci.org/prateekpronoc/json-indexify)


[![Coverage Status](https://coveralls.io/repos/github/prateekpronoc/json-indexify/badge.svg?branch=master)](https://coveralls.io/github/prateekpronoc/json-indexify?branch=master)
