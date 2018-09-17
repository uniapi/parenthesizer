/*************************************************************************
                          Written by Ali Muhammed
                            uniapi@outlook.com
                            September 17, 2018
*************************************************************************/

function parenthesize(str, config = [['(',')'], ['[',']'], ['{','}']]) {
  const seqs = config.length; // the configuration sequence length
  const len = str.length;     // the string length
  const cmp = [ ];            // the sequence comparison rules [zero: o == c, one: o != c]
  const store = [ ];          // the stack storage

  for (let i=0; i < seqs; i++)                       // iterating through the configuration sequence
    cmp[i] = config[i][0] === config[i][1] ? 0 : 1;  // checking where the sequence has the same opening and closing
  for (let i=0; i<len; i++) {
    for (let j=0; j < seqs; j++) {
      if (config[j][0] === str[i]) {                          // if opening is found
        if (!cmp[j] && config[j][0] == store[store.length-1]) // if opening equals closing and the last stored
          store.pop();                                        // removing the last match
        else
          store.push(str[i]);                                 // adding to the store as it may happen to be a new
        break;                                                // breaking to iterate the next string character search
      }
      else if (config[j][1] === str[i]) {            // if closing is found
        if (config[j][0] == store[store.length-1]) { // checking whether the last stored is its opening
          store.pop();                               // removing it if true
          break;                                     // breaking to loop the next string character search
        }
        else
          return false;                              // returning false because the sequence is broken
      }
    }
  }
  if (store.length)           // checking whether openings are stored
    return false;             // then returning false as the sequence is not complete

  return true;                // there is a complete and unbroken sequence
}

export { parenthesize }
