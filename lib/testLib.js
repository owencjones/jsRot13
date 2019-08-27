assert = (bool, msg = `Assertion failed`) => {
    if (bool) return true;
    throw msg;
};

const describe = it = (desc, predicate) => {
    console.group(desc)
    try {
        predicate();
    } catch (error) {
        console.error('Fail', error);
        console.groupEnd(desc);
    }
    console.log('Success')
    console.groupEnd(desc);
}

module.exports = { assert, describe, it};