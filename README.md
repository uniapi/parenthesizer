This Software Follow *Semantic Versioning Specification* [SemVer](http://semver.org/)

# Parenthesizer

## Task
Implement a function **parenthesize**, given a character string and the array of match configurations, returns `true` if the matches are met. Otherwise, return `false`.


### Example:
```js
parenthesize("()", [['(', ')']])      // true
parenthesize("array[i", [['[', ']']]) // false
parenthesize("function parenthesize(str, config) { ", ['(', ')'], ['{', '}']]) // false
parenthesize("1a3c`5f5`h7j9", [['1','9'], ['3', '7'], ['5', '5'], ['`', '`']]) // true
parenthesize("(a, b) => [a || b, a || b * (a + b)]", [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']]) // true
```

### Requirements
* `src/index.js` - the solution file
* `test/test.js` - the file to *test the solution*

### Version
* The working code should reside in the **parenthesizer branch**
* No less than two git commits and push to `© GitHub`

### Tips
* `npm ini`     - initialize the repository and *follow the instructions*
* `npm i mocha` - install the **Mocha** *test framework*
* `npm t`       - test the solution
* `open package.json and edit:`
```json
  "scripts": {
    "test": "mocha test/test.js"
  }
```

#### Optional
* `npm i babel-preset-env --save-dev` - use the *latest JavaScript*
* `npm i babel-core --save-dev`       - convert the source code into a *compatible JavaScript*
* `open package.json and edit:`
```json
  "scripts": {
    "init": "mkdir dist",
    "clean": "rm -rf dist",
    "note": "cp LICENSE README.md dist",
    "build": "babel src test -d dist --presets env && npm run note",
    "test": "npm run build && mocha --require babel-core/register dist/test.js"
  }
```
