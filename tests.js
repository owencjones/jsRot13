#! /usr/bin/env/node
const { it, describe, assert } = require('./lib/testLib')
const { code } = require('./lib/rot13');

console.log('Starting test');

describe('#code', () => {
    const originalMessage = `Shy Lovers Try Positions They Can't Handle.`
    const expectedOutCome = `Ful Ybiref Gel Cbfvgvbaf Gurl Pna'g Unaqyr.`

    it ('should encode a message correctly', () => {
        assert(code(originalMessage) === expectedOutCome, 'Encoding failure');
    });

    it ('should decode the encoded message by the same process', () => {
        assert(code(expectedOutCome) === originalMessage, 'Decoding failure')
    });
});

describe('#getRot13LookupTable', () => {

})
