# Rot13 encoder

## An encoder/decoder for Rot13 written in Javascript with no dependencies

Continuing my theme of zero-dependency JS, I've written a very quick Rot13 encoder.  This time, it has a test system, but even that is not a dependency, although it uses almost the same syntax as Mocha, just for familiarity.

### What is Rot13

Rot13, or Rotate-by-13, is a nigh-on useless cipher used a long time ago when cryptography wasn't very advanced.  It's not hard to break by using methods like:

- Letter frequency analysis
- Looking at punctuation to help form an idea of input (it doesn't encode anything but letters)
- Substituting letters for others until it just works - brute forcing

Basically, it sucks as a cipher, but it's ok for things like encoding the punchline to a joke on a forum to stop it being ruined by people looking at the punchline first, or encoding spoilers so that people can choose not to see them.  It's just a bit of fun.

Rot13 works by offsetting the alphabet by 13 characters:

| A | B | C | D | etc. |
|---|---|---|---|------|
| N | O | P | Q | etc. |

The effect of which is two-fold:

- Each letter has another that it becomes when encoded
- Because we offset by 13, and the alphabet is 26 characters (or 2 * 13), encoding and decoding are _the same action_

Which is just a bit nifty, even if it is a useless cipher overall.

### Usage

You need Node v10 or above installed and in your path.

#### CLI

The CLI has a hashbang, so should run as given on any system that has Node of a suitable version installed, POSIX environment needed though.

```bash
$ ./rot13 encode this
rapbqr guvf
```

#### Usage as a library

The file `lib/rot13.js` is a Node style module that you can include:

```javascript
const { code } = require('path/to/rot13.js');

const codedMessage = code('message');
```

#### Tests

The repo has tests, which were basically the reason for writing the repo in the first place (to write a standalone basic unit test system that requires no dependencies.)

```bash
$ ./tests.js
Starting test
#code
  should encode a message correctly
    Success
  should decode the encoded message by the same process
    Success
  Success
```

The tests run by using the following functions:

- `describe` - Takes a title, and a predicate function, and runs the predicate function, keeping the output indented in nicely formatted blocks.  Multiple `describe` blocks can be embedded.
- `it` - Syntactically identical to describe, but used to write tests that are more readable.  E.g. `it ('should work', testThatItWorks)`
- `assert` - Takes a `Boolean` expression and a message.  Throws the message if the boolean is false.

Uncompressed, the test functions are 390 bytes.  The `assert` function would obviously struggle with complicated assertions, like comparing objects or arrays, but to be fair the assert function in `mocha` does too.  `chai` does a good job of assertion though.
