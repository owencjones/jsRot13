module.exports = {};

module.exports.getRot13LookupTable = () => {
    const upperCaseAlphabet = ','.repeat(25).split(',').map((_, i) => String.fromCharCode(i + 65)).join('');
    const lowerCaseAlphabet = upperCaseAlphabet.toLowerCase();
    const rot13Key = (upperCaseAlphabet.substr(13) + upperCaseAlphabet.substr(0, 13) + lowerCaseAlphabet.substr(13) + lowerCaseAlphabet.substr(0, 13)).split('');
    const alphabet = (upperCaseAlphabet + lowerCaseAlphabet).split('');
    const key = {}

    alphabet.forEach((c, i) => key[c] = rot13Key[i]);

    return key;
}