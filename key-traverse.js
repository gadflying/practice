/* 
* Traverse a hash table given a set of keys and return its value
*/

function parse(hashtable, keys) {
  while (keys.length) {
  	var key = keys.splice(0,1);
  	if (!hashtable[key]) {
  		return null;
  	} else {
  		hashtable = hashtable[key];
  	}
  }

  // Hashtable is value of last key
  return hashtable;
}

var input = {
  k1: 'v1',
  k2: {
    k21: 'v21',
    k22: {
      k221: 'v221'
    }
  },
  k3: {
    k31: 'v31'
  }
}

// Should be true
parse(input, ['k2', 'k22', 'k221']) === 'v221'

// Should be false
parse(input, ['k2', 'k22', 'k222']) === 'v221'

// Should be false
parse(input, ['k2']) === 'v221';