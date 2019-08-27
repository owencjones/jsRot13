const { code } = require('./lib/rot13');

const message = 'All your base are belong to us.';
const encodedMsg = code(message);
const decodedMsg = code(encodedMsg);

console.log(`
Rot13 Encode/Decode in JS

Original message: ${message}

Encoded: ${encodedMsg}

Decoded: ${decodedMsg}
`)