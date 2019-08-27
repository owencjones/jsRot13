const {
    getRot13LookupTable
} = require('./utils');

module.exports = {}

module.exports.code = msg => {
    return msg.split('').map(c => getRot13LookupTable()[c] || c).join('');
}