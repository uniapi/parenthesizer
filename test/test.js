/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 17, 2018
*************************************************************************/

import * as assert from 'assert';
import { parenthesize } from '../dist/index.js';

const setcase = [
  { str: "()",      config: [['(', ')']], match: true },
  { str: "array[i", config: [['[', ']']], match: false  },
  { str: "function parenthesize(str, config) { ", config: [['(', ')'], ['{', '}']], match: false },
  { str: "1a2b3c4d`5e5`f6g7h8j9",                 config: [['1','9'], ['2','8'], ['3', '7'], ['4', '6'], ['5', '5'], ['`', '`']], match: true },
  { str: "(a, b) => [a || b, a || b * (a + b)]",  config: [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']], match: true }
];

describe("Generic Test", () => {
  setcase.forEach((set, inx) => it(`${inx+1}`, () => assert.strictEqual(parenthesize(set.str, set.config), set.match)));
});
