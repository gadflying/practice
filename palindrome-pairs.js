/**
336. Palindrome Pairs
https://leetcode.com/problems/palindrome-pairs/#/description


Given a list of unique words, find all pairs of distinct indices (i, j) in the given list,
so that the concatenation of the two words, i.e. words[i] + words[j] is a palindrome.
```
Example 1:
Given words = ["bat", "tab", "cat"]
Return [[0, 1], [1, 0]]
The palindromes are ["battab", "tabbat"]
Example 2:
Given words = ["abcd", "dcba", "lls", "s", "sssll"]
Return [[0, 1], [1, 0], [3, 2], [2, 4]]
The palindromes are ["dcbaabcd", "abcddcba", "slls", "llssssll"]
```
**/

/**
 * @param {string[]} words
 * @return {number[][]}
 */

/* eslint-disable no-param-reassign */
const palindromePairs = (words) => {
  const TrieNode = (c, index = null) => ({ val: c, children: {}, index });

  const allPals = (trieNode, stem, stems) => {
    if (trieNode.val === '#') {
      stems.push({ word: stem, index: trieNode.index });
    } else {
      stem += trieNode.val || '';
    }

    Object.keys(trieNode.children).forEach((c) => {
      const nextTrie = trieNode.children[c];
      allPals(nextTrie, stem, stems);
    });
  };

  const trie = words.reduce((root, word, index) => {
    let p = root;
    word.split('').reverse().forEach((c) => {
      if (!p.children[c]) {
        p.children[c] = TrieNode(c);
      }
      p = p.children[c];
    });
    p.children['#'] = TrieNode('#', index);
    return root;
  }, TrieNode(null));

  const pairs = [];

  console.log('trie', JSON.stringify(trie, null, 2));
  words.forEach((word, index) => {
    console.log('word', word);
    let p = trie;
    word.split('').some((c) => {
      if (p.children[c]) {
        p = p.children[c];
        return false;
      }
      p = trie;
      return true;
    });

    if (p.val !== null) {
      Object.keys(p.children).forEach((c) => {
        if (c === '#') {
          const terminal = p.children['#'];
          if (index !== terminal.index) {
            pairs.push([index, terminal.index]);
          }
        } else {
          const child = p.children[c];
          const stems = [];
          allPals(child, '', stems);
          stems.forEach((stem) => {
            const realStem = stem.word.slice();
            if (index !== stem.index && realStem.split('').reverse().join('') === realStem) {
              pairs.push([index, stem.index]);
            }
          });
          console.log(stems);
        }
      });
    }
  });

  if (trie.children['#'] !== undefined) {
    const terminal = trie.children['#'];
    const stems = [];
    allPals(trie, '', stems);
    stems.forEach((stem) => {
      const realStem = stem.word.slice();
      if (terminal.index !== stem.index && realStem.split('').reverse().join('') === realStem) {
        pairs.push([terminal.index, stem.index]);
        pairs.push([stem.index, terminal.index]);
      }
    });
  }

  return pairs;
};

console.log(palindromePairs(['a', 'b', 'c', 'ab', 'ac', 'aa']));
// console.log(palindromePairs(['bat', 'tab', 'cat']));
// console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
// console.log(palindromePairs(['a', 'abc', 'aba', '']));
// console.log(palindromePairs(['efjhhdeiajcaidfd', 'cf', 'agggg', 'hjcijibihjjcfbb', 'cgbdabdfhagabde', 'agijdh', 'ddcghfebfgf', 'ggdjeedegdhcfgif', 'hjbecjdiba', 'gaichfabfdicifgig', 'ejhigebcha', 'jjfjhieebhgihji', 'eibieefiabah', 'cdjjiicaabedg', 'gabdafaagfbeecedcgf', 'jbcjgbgg', 'ccfdbabdhchgaagecgi', 'hefichdahdaceice', 'ghahgcjbgajhgcc', 'ehfg', 'hgdehhfgfjbgjgia', 'hecghg', 'ghbhhhbebidah', 'gaaefcehbjfibehje', 'iegffjiifabgd', 'ciaaibdhjhjigbgi', 'jahgffbcaigdjij', 'cijhfaigbjfbgfh', 'iehfjdeagfhbajdgjb', 'iaehbajgagaagd', 'ddeibjghb', 'deadjeidffjijcafg', 'bchfhgcfe', 'ahg', 'jjafge', 'eecfgfdh', 'aaccfjc', 'gii', 'fibijfggeea', 'ifddeabihe', 'hhhdddjichaca', 'bhfiddbfciab', 'gfafhagfbbbjch', 'bjdahhgiidcchjecigci', 'deifiah', 'dbedjgajhf', 'eijcba', 'dgijabdaacijiae', 'headhgcdcjigdjab', 'iej', 'aggbibjhcdjfagbdb', 'jcgadciacga', 'ajgbbcegghjbicjiacge', 'c', 'agahdedc', 'giidbdbefh', 'dcjaccbch', 'icaa', 'ehcibghiicgfhgadchg', 'bebccffjejjfiif', 'd', 'heccdagabab', 'cb', 'cijffd', 'ga', 'aaaifabdiaeibjde', 'cc', 'faibifaaacecgij', 'aeeed', 'decihfdh', 'fgi', 'dg', 'iaiffgajjfe', 'digfjhjh', 'eejffbbegcaicg', 'ejecdbddhhidjfcejd', 'ibeiff', 'f', 'gdbgeibjjihahfbibij', 'ighbcidgfjggbgic', 'hefjeiah', 'cbbeccjdcjc', 'ecfdbf', 'fjfghec', 'bafceaffacfha', 'cgehdcdf', 'aiifjfdbahaj', 'hf', 'dfhchdfagffb', 'gbja', 'bgeieh', 'ceebich', 'jchiieiegbhgcjf', 'gbgijahbjhjddgb', 'ahfgefiecjbcf', 'cdjjgggbhhifieh', 'af', 'iggbjcibfeda', 'hhgijej', 'fabcijjaijdejji', 'b', 'jbcgbaijja', 'aahjf', 'ihgbcajgaah', 'abdgeijbfjadcacfajci', 'fbgiajj', 'fhfbiie', 'aaiadhjgfagdb', 'cgag', 'ijehbbhdjajg', 'iedaf', 'iaafdcfighd', 'becdaedddeh', 'aadhaabhibfjd', 'fcfgibjc', 'iheacchajcjecjjfc', 'gbdbcgfeh', 'acgddfaaegbeegijghg', 'bghb', 'ggdbihccdgb', 'gfgc', 'cdhgjbdgbb', 'abhichehehahfhbachdd', 'dfhbhabebdgafaj', 'adbcegidbaadfdhiiha', 'jhfaeedihchga', 'jgbfecgegbeicidjadeh', 'giie', 'dccfajfiigc', 'adai', 'defbfiijbfhbfdageibe', 'cjgfbbjd', 'idhbhiegbhgjadfge', 'gjd', 'jdecfbhjjfi', 'ijdcbgfhiacbbjchc', 'gahabjhejfijhhde', 'hcfajbbedibb', 'bajegbbgfh', 'dgeficccjhjiajhffe', 'bh', 'cfghg', 'hjfcfdihbhdjiec', 'dhecjahhbghfegdijgh', 'iececighacfad', 'bijafbacjg', 'fchifaehdichfbae', 'fidaeefbbg', 'fdhafiegdigac', 'agjaadjh', 'hbidjifhffcaafjadf', 'adgibabebdgiedg', 'jaabdbfgecbbiafdih', 'j', 'ejjfcgjbhed', 'gdhhagbiiijagbjegd', 'je', 'jecjedhagigfccf', 'ida', 'hcaefg', 'hghfhjhgfcjf', 'cegdbcechhbgebjjfdc', 'hiciacgibfehafai', 'agiegjgdejda', 'bjehijidaca', 'fja', 'jabeijfdedad', 'hfdhjhhfgbfaih', 'gbehbhdjbfajhfgacg', 'gehdigdihiafiehfhe', 'caefha', 'efiifjegafb', 'hdbhjbdjigbcg', 'id', 'hebchc', 'abdiadihhcjeh', 'hejffbfdig', 'cciaaijicfgegjac', 'ihgehg', 'hhehhgcg', 'gggifbfgfaibige', 'hahfbejidagce', 'hgc', 'dgajaddfcbdcgfeh', 'hadaacfbi', 'jbddbiafghfjf', 'heeggjgedfbdb', 'fgcfc', 'dgbjjj', 'dddefieifcecifaid', 'jicfhhi', 'fbjeiacfjihgehdf', 'geahfddgejgdbdbgg', 'cifjcfjhcajhdiccffbe', 'gaiej', 'ggji', 'ahjebaiadi', 'gbggadbfhfbihfehd', 'ddbgh', 'ihicec', 'adgiiijhejadgcahb', 'ih', 'jfegajhfiiegcghcegdg', 'cahfce', 'bhfefifidbcbdgchd', 'dbehcij', 'hfaicggd', 'jccjge', 'fijcbehgihfgd', 'ejfjdddhaaefdgefea', 'iihahdffiee', 'fbgebehede', 'g', 'aegeefgef', 'jfdbdjb', 'ehfgihbdb', 'bdhjg', 'djbbcdfdcbdb', 'cdiaiebgicfga', 'ghhgidjejbcca', 'beee', 'hbggjggcdfbdbf', 'dcggfjb', 'dce', 'chaajfbbcedcj', 'fhfcicjdajfbjdcjj', 'bddcegcgjecfhfdb', 'gjadf', 'bgcfihg', 'fecifgahfde', 'cidiebibcbgdeddbfh', 'eeede', 'ijbibbgjjcifhdiie', 'jieeigdfdbegh', 'cdieegecbfcceiieh', 'i', 'eaaiiag', 'faeegabjehhcfifgbhfb', 'eejghb', 'cbcchdfhjgdc', 'efahgddgcjiibbe', 'cfbhiebiehibfbgbgaa', 'bjiiiffbfeffjihfhfci', 'agijajhha', 'hbfaiegjdebie', 'ggbcebiifcdi', 'cbfjfccbjabaec', 'fegfbajhia', 'fjiaaibahcdfgjc', 'jg', 'iifcfcghfebhigc', 'dfadcdji', 'dbfgjfif', 'jccfdiabg', 'fieeedebgiifahi', 'cddghbejcj', 'jaeijieiabgdjdibh', 'ggfch', 'jdfehjjeifbfga', 'gjbicdcdecjegaie', 'ijafiihcahaedgdibh', 'cceecic', 'hjaeadehjedc', 'jjhecccfgbbjdfbbhggf', 'degichja', 'ejijgefegddg', 'behcidghfcdhjibjdif', 'hha', 'bggedecejeccacjc', 'cedagiffcdhijcd', 'dagbbdfgc', 'jdiaice', 'ghci', 'hdjfiggiiddbe', 'bfdbcbbacfedce', 'dgjijehadacei', 'ddfdidiedb', 'aifjfbd', 'jacfhde', 'haafcaadjeadicfcbh']));

const palindromePairs2 = function palindromePairs(words) {
  const isPalindrome = chars => chars === chars.split('').reverse().join('');
  const pairs = [];
  const max = words.length;
  const cachedWords = {};
  const compareWord = (i, j) => {
    const word1 = words[i];
    const word2 = words[j];
    const fullWord = `${word1}${word2}`;
    if (cachedWords[fullWord]) {
      pairs.push([i, j]);
    } else if (cachedWords[fullWord] === undefined) {
      if (word1.split('').reverse().join('') === word2) {
        pairs.push([i, j]);
        // pairs.push([j, i]);
        cachedWords[fullWord] = true;
      } else if (isPalindrome(fullWord)) {
        pairs.push([i, j]);
        cachedWords[fullWord] = true;
      } else {
        cachedWords[fullWord] = false;
      }
    }
  };

  for (let i = 0; i < max; i += 1) {
    let j = i + 1;
    for (j; j < max; j += 1) {
      compareWord(i, j);
      compareWord(j, i);
    }
  }

  return pairs;
};

// console.log(palindromePairs(['bat', 'tab', 'cat']));
// console.log(palindromePairs(['abcd', 'dcba', 'lls', 's', 'sssll']));
// console.log(palindromePairs(['a', 'abc', 'aba', '']));
// console.log(palindromePairs(['efjhhdeiajcaidfd', 'cf', 'agggg', 'hjcijibihjjcfbb', 'cgbdabdfhagabde', 'agijdh', 'ddcghfebfgf', 'ggdjeedegdhcfgif', 'hjbecjdiba', 'gaichfabfdicifgig', 'ejhigebcha', 'jjfjhieebhgihji', 'eibieefiabah', 'cdjjiicaabedg', 'gabdafaagfbeecedcgf', 'jbcjgbgg', 'ccfdbabdhchgaagecgi', 'hefichdahdaceice', 'ghahgcjbgajhgcc', 'ehfg', 'hgdehhfgfjbgjgia', 'hecghg', 'ghbhhhbebidah', 'gaaefcehbjfibehje', 'iegffjiifabgd', 'ciaaibdhjhjigbgi', 'jahgffbcaigdjij', 'cijhfaigbjfbgfh', 'iehfjdeagfhbajdgjb', 'iaehbajgagaagd', 'ddeibjghb', 'deadjeidffjijcafg', 'bchfhgcfe', 'ahg', 'jjafge', 'eecfgfdh', 'aaccfjc', 'gii', 'fibijfggeea', 'ifddeabihe', 'hhhdddjichaca', 'bhfiddbfciab', 'gfafhagfbbbjch', 'bjdahhgiidcchjecigci', 'deifiah', 'dbedjgajhf', 'eijcba', 'dgijabdaacijiae', 'headhgcdcjigdjab', 'iej', 'aggbibjhcdjfagbdb', 'jcgadciacga', 'ajgbbcegghjbicjiacge', 'c', 'agahdedc', 'giidbdbefh', 'dcjaccbch', 'icaa', 'ehcibghiicgfhgadchg', 'bebccffjejjfiif', 'd', 'heccdagabab', 'cb', 'cijffd', 'ga', 'aaaifabdiaeibjde', 'cc', 'faibifaaacecgij', 'aeeed', 'decihfdh', 'fgi', 'dg', 'iaiffgajjfe', 'digfjhjh', 'eejffbbegcaicg', 'ejecdbddhhidjfcejd', 'ibeiff', 'f', 'gdbgeibjjihahfbibij', 'ighbcidgfjggbgic', 'hefjeiah', 'cbbeccjdcjc', 'ecfdbf', 'fjfghec', 'bafceaffacfha', 'cgehdcdf', 'aiifjfdbahaj', 'hf', 'dfhchdfagffb', 'gbja', 'bgeieh', 'ceebich', 'jchiieiegbhgcjf', 'gbgijahbjhjddgb', 'ahfgefiecjbcf', 'cdjjgggbhhifieh', 'af', 'iggbjcibfeda', 'hhgijej', 'fabcijjaijdejji', 'b', 'jbcgbaijja', 'aahjf', 'ihgbcajgaah', 'abdgeijbfjadcacfajci', 'fbgiajj', 'fhfbiie', 'aaiadhjgfagdb', 'cgag', 'ijehbbhdjajg', 'iedaf', 'iaafdcfighd', 'becdaedddeh', 'aadhaabhibfjd', 'fcfgibjc', 'iheacchajcjecjjfc', 'gbdbcgfeh', 'acgddfaaegbeegijghg', 'bghb', 'ggdbihccdgb', 'gfgc', 'cdhgjbdgbb', 'abhichehehahfhbachdd', 'dfhbhabebdgafaj', 'adbcegidbaadfdhiiha', 'jhfaeedihchga', 'jgbfecgegbeicidjadeh', 'giie', 'dccfajfiigc', 'adai', 'defbfiijbfhbfdageibe', 'cjgfbbjd', 'idhbhiegbhgjadfge', 'gjd', 'jdecfbhjjfi', 'ijdcbgfhiacbbjchc', 'gahabjhejfijhhde', 'hcfajbbedibb', 'bajegbbgfh', 'dgeficccjhjiajhffe', 'bh', 'cfghg', 'hjfcfdihbhdjiec', 'dhecjahhbghfegdijgh', 'iececighacfad', 'bijafbacjg', 'fchifaehdichfbae', 'fidaeefbbg', 'fdhafiegdigac', 'agjaadjh', 'hbidjifhffcaafjadf', 'adgibabebdgiedg', 'jaabdbfgecbbiafdih', 'j', 'ejjfcgjbhed', 'gdhhagbiiijagbjegd', 'je', 'jecjedhagigfccf', 'ida', 'hcaefg', 'hghfhjhgfcjf', 'cegdbcechhbgebjjfdc', 'hiciacgibfehafai', 'agiegjgdejda', 'bjehijidaca', 'fja', 'jabeijfdedad', 'hfdhjhhfgbfaih', 'gbehbhdjbfajhfgacg', 'gehdigdihiafiehfhe', 'caefha', 'efiifjegafb', 'hdbhjbdjigbcg', 'id', 'hebchc', 'abdiadihhcjeh', 'hejffbfdig', 'cciaaijicfgegjac', 'ihgehg', 'hhehhgcg', 'gggifbfgfaibige', 'hahfbejidagce', 'hgc', 'dgajaddfcbdcgfeh', 'hadaacfbi', 'jbddbiafghfjf', 'heeggjgedfbdb', 'fgcfc', 'dgbjjj', 'dddefieifcecifaid', 'jicfhhi', 'fbjeiacfjihgehdf', 'geahfddgejgdbdbgg', 'cifjcfjhcajhdiccffbe', 'gaiej', 'ggji', 'ahjebaiadi', 'gbggadbfhfbihfehd', 'ddbgh', 'ihicec', 'adgiiijhejadgcahb', 'ih', 'jfegajhfiiegcghcegdg', 'cahfce', 'bhfefifidbcbdgchd', 'dbehcij', 'hfaicggd', 'jccjge', 'fijcbehgihfgd', 'ejfjdddhaaefdgefea', 'iihahdffiee', 'fbgebehede', 'g', 'aegeefgef', 'jfdbdjb', 'ehfgihbdb', 'bdhjg', 'djbbcdfdcbdb', 'cdiaiebgicfga', 'ghhgidjejbcca', 'beee', 'hbggjggcdfbdbf', 'dcggfjb', 'dce', 'chaajfbbcedcj', 'fhfcicjdajfbjdcjj', 'bddcegcgjecfhfdb', 'gjadf', 'bgcfihg', 'fecifgahfde', 'cidiebibcbgdeddbfh', 'eeede', 'ijbibbgjjcifhdiie', 'jieeigdfdbegh', 'cdieegecbfcceiieh', 'i', 'eaaiiag', 'faeegabjehhcfifgbhfb', 'eejghb', 'cbcchdfhjgdc', 'efahgddgcjiibbe', 'cfbhiebiehibfbgbgaa', 'bjiiiffbfeffjihfhfci', 'agijajhha', 'hbfaiegjdebie', 'ggbcebiifcdi', 'cbfjfccbjabaec', 'fegfbajhia', 'fjiaaibahcdfgjc', 'jg', 'iifcfcghfebhigc', 'dfadcdji', 'dbfgjfif', 'jccfdiabg', 'fieeedebgiifahi', 'cddghbejcj', 'jaeijieiabgdjdibh', 'ggfch', 'jdfehjjeifbfga', 'gjbicdcdecjegaie', 'ijafiihcahaedgdibh', 'cceecic', 'hjaeadehjedc', 'jjhecccfgbbjdfbbhggf', 'degichja', 'ejijgefegddg', 'behcidghfcdhjibjdif', 'hha', 'bggedecejeccacjc', 'cedagiffcdhijcd', 'dagbbdfgc', 'jdiaice', 'ghci', 'hdjfiggiiddbe', 'bfdbcbbacfedce', 'dgjijehadacei', 'ddfdidiedb', 'aifjfbd', 'jacfhde', 'haafcaadjeadicfcbh']));


// N2 squared version
const palindromePairsN2 = function palindromePairsN2(words) {
  const isPalindrome = chars => chars === chars.split('').reverse().join('');
  const pairs = [];
  const max = words.length;
  // N2. No caching
  for (let i = 0; i < max; i += 1) {
    let j = i + 1;
    for (j; j < max; j += 1) {
      const word1 = words[i];
      const word2 = words[j];
      if (isPalindrome(`${word1}${word2}`)) {
        pairs.push([i, j]);
      }
      if (isPalindrome(`${word2}${word1}`)) {
        pairs.push([j, i]);
      }
    }
  }

  return pairs;
};

/* eslint-disable no-param-reassign */
const palindromePairs5 = function palindromePairs(words) {
  if (!words || words.length === 0) {
    return [];
  }

  const isPalindrome = chars => chars === chars.split('').reverse().join('');
  const pairs = [];
  const max = words.length;

  const cached = words.reduce((memo, word, i) => Object.assign(memo, { [word]: i }), {});

  // N2. No caching
  for (let i = 0; i < max; i += 1) {
    let j = i + 1;
    for (j; j < max; j += 1) {
      const word1 = words[i];
      const word2 = words[j];
      if (isPalindrome(`${word1}${word2}`)) {
        pairs.push([i, j]);
      }
      if (isPalindrome(`${word2}${word1}`)) {
        pairs.push([j, i]);
      }
    }
  }

  return pairs;
};

// console.log(palindromePairsN2(['bat', 'tab', 'cat']));
// console.log(palindromePairsN2(['abcd', 'dcba', 'lls', 's', 'sssll']));
// console.log(palindromePairsN2(['a', 'abc', 'aba', '']));
// console.log(palindromePairsN2(['efjhhdeiajcaidfd', 'cf', 'agggg', 'hjcijibihjjcfbb', 'cgbdabdfhagabde', 'agijdh', 'ddcghfebfgf', 'ggdjeedegdhcfgif', 'hjbecjdiba', 'gaichfabfdicifgig', 'ejhigebcha', 'jjfjhieebhgihji', 'eibieefiabah', 'cdjjiicaabedg', 'gabdafaagfbeecedcgf', 'jbcjgbgg', 'ccfdbabdhchgaagecgi', 'hefichdahdaceice', 'ghahgcjbgajhgcc', 'ehfg', 'hgdehhfgfjbgjgia', 'hecghg', 'ghbhhhbebidah', 'gaaefcehbjfibehje', 'iegffjiifabgd', 'ciaaibdhjhjigbgi', 'jahgffbcaigdjij', 'cijhfaigbjfbgfh', 'iehfjdeagfhbajdgjb', 'iaehbajgagaagd', 'ddeibjghb', 'deadjeidffjijcafg', 'bchfhgcfe', 'ahg', 'jjafge', 'eecfgfdh', 'aaccfjc', 'gii', 'fibijfggeea', 'ifddeabihe', 'hhhdddjichaca', 'bhfiddbfciab', 'gfafhagfbbbjch', 'bjdahhgiidcchjecigci', 'deifiah', 'dbedjgajhf', 'eijcba', 'dgijabdaacijiae', 'headhgcdcjigdjab', 'iej', 'aggbibjhcdjfagbdb', 'jcgadciacga', 'ajgbbcegghjbicjiacge', 'c', 'agahdedc', 'giidbdbefh', 'dcjaccbch', 'icaa', 'ehcibghiicgfhgadchg', 'bebccffjejjfiif', 'd', 'heccdagabab', 'cb', 'cijffd', 'ga', 'aaaifabdiaeibjde', 'cc', 'faibifaaacecgij', 'aeeed', 'decihfdh', 'fgi', 'dg', 'iaiffgajjfe', 'digfjhjh', 'eejffbbegcaicg', 'ejecdbddhhidjfcejd', 'ibeiff', 'f', 'gdbgeibjjihahfbibij', 'ighbcidgfjggbgic', 'hefjeiah', 'cbbeccjdcjc', 'ecfdbf', 'fjfghec', 'bafceaffacfha', 'cgehdcdf', 'aiifjfdbahaj', 'hf', 'dfhchdfagffb', 'gbja', 'bgeieh', 'ceebich', 'jchiieiegbhgcjf', 'gbgijahbjhjddgb', 'ahfgefiecjbcf', 'cdjjgggbhhifieh', 'af', 'iggbjcibfeda', 'hhgijej', 'fabcijjaijdejji', 'b', 'jbcgbaijja', 'aahjf', 'ihgbcajgaah', 'abdgeijbfjadcacfajci', 'fbgiajj', 'fhfbiie', 'aaiadhjgfagdb', 'cgag', 'ijehbbhdjajg', 'iedaf', 'iaafdcfighd', 'becdaedddeh', 'aadhaabhibfjd', 'fcfgibjc', 'iheacchajcjecjjfc', 'gbdbcgfeh', 'acgddfaaegbeegijghg', 'bghb', 'ggdbihccdgb', 'gfgc', 'cdhgjbdgbb', 'abhichehehahfhbachdd', 'dfhbhabebdgafaj', 'adbcegidbaadfdhiiha', 'jhfaeedihchga', 'jgbfecgegbeicidjadeh', 'giie', 'dccfajfiigc', 'adai', 'defbfiijbfhbfdageibe', 'cjgfbbjd', 'idhbhiegbhgjadfge', 'gjd', 'jdecfbhjjfi', 'ijdcbgfhiacbbjchc', 'gahabjhejfijhhde', 'hcfajbbedibb', 'bajegbbgfh', 'dgeficccjhjiajhffe', 'bh', 'cfghg', 'hjfcfdihbhdjiec', 'dhecjahhbghfegdijgh', 'iececighacfad', 'bijafbacjg', 'fchifaehdichfbae', 'fidaeefbbg', 'fdhafiegdigac', 'agjaadjh', 'hbidjifhffcaafjadf', 'adgibabebdgiedg', 'jaabdbfgecbbiafdih', 'j', 'ejjfcgjbhed', 'gdhhagbiiijagbjegd', 'je', 'jecjedhagigfccf', 'ida', 'hcaefg', 'hghfhjhgfcjf', 'cegdbcechhbgebjjfdc', 'hiciacgibfehafai', 'agiegjgdejda', 'bjehijidaca', 'fja', 'jabeijfdedad', 'hfdhjhhfgbfaih', 'gbehbhdjbfajhfgacg', 'gehdigdihiafiehfhe', 'caefha', 'efiifjegafb', 'hdbhjbdjigbcg', 'id', 'hebchc', 'abdiadihhcjeh', 'hejffbfdig', 'cciaaijicfgegjac', 'ihgehg', 'hhehhgcg', 'gggifbfgfaibige', 'hahfbejidagce', 'hgc', 'dgajaddfcbdcgfeh', 'hadaacfbi', 'jbddbiafghfjf', 'heeggjgedfbdb', 'fgcfc', 'dgbjjj', 'dddefieifcecifaid', 'jicfhhi', 'fbjeiacfjihgehdf', 'geahfddgejgdbdbgg', 'cifjcfjhcajhdiccffbe', 'gaiej', 'ggji', 'ahjebaiadi', 'gbggadbfhfbihfehd', 'ddbgh', 'ihicec', 'adgiiijhejadgcahb', 'ih', 'jfegajhfiiegcghcegdg', 'cahfce', 'bhfefifidbcbdgchd', 'dbehcij', 'hfaicggd', 'jccjge', 'fijcbehgihfgd', 'ejfjdddhaaefdgefea', 'iihahdffiee', 'fbgebehede', 'g', 'aegeefgef', 'jfdbdjb', 'ehfgihbdb', 'bdhjg', 'djbbcdfdcbdb', 'cdiaiebgicfga', 'ghhgidjejbcca', 'beee', 'hbggjggcdfbdbf', 'dcggfjb', 'dce', 'chaajfbbcedcj', 'fhfcicjdajfbjdcjj', 'bddcegcgjecfhfdb', 'gjadf', 'bgcfihg', 'fecifgahfde', 'cidiebibcbgdeddbfh', 'eeede', 'ijbibbgjjcifhdiie', 'jieeigdfdbegh', 'cdieegecbfcceiieh', 'i', 'eaaiiag', 'faeegabjehhcfifgbhfb', 'eejghb', 'cbcchdfhjgdc', 'efahgddgcjiibbe', 'cfbhiebiehibfbgbgaa', 'bjiiiffbfeffjihfhfci', 'agijajhha', 'hbfaiegjdebie', 'ggbcebiifcdi', 'cbfjfccbjabaec', 'fegfbajhia', 'fjiaaibahcdfgjc', 'jg', 'iifcfcghfebhigc', 'dfadcdji', 'dbfgjfif', 'jccfdiabg', 'fieeedebgiifahi', 'cddghbejcj', 'jaeijieiabgdjdibh', 'ggfch', 'jdfehjjeifbfga', 'gjbicdcdecjegaie', 'ijafiihcahaedgdibh', 'cceecic', 'hjaeadehjedc', 'jjhecccfgbbjdfbbhggf', 'degichja', 'ejijgefegddg', 'behcidghfcdhjibjdif', 'hha', 'bggedecejeccacjc', 'cedagiffcdhijcd', 'dagbbdfgc', 'jdiaice', 'ghci', 'hdjfiggiiddbe', 'bfdbcbbacfedce', 'dgjijehadacei', 'ddfdidiedb', 'aifjfbd', 'jacfhde', 'haafcaadjeadicfcbh']));


// SOmeone elses solution
const palindromePairsOther = function (words) {
  let i,
    j,
    wordLength,
    prefix,
    suffix,
    reversedPrefix,
    reversedSuffix;
  const dict = words.reduce((memo, word, index) => Object.assign(memo, { [word]: index }), {});
  const result = [];
  const length = words.length;

  // Null case
  if (!words || length === 0) {
    return [];
  }

  // Reverse lookup
  // for (i = 0; i < length; i += 1) {
  //   dict[words[i]] = i;
  // }

  for (i = 0; i < length; i += 1) {
    wordLength = words[i].length;

    prefix = '';
    suffix = words[i];
    reversedPrefix = '';
    reversedSuffix = suffix.split('').reverse().join('');

    for (j = 0; j < wordLength + 1; j += 1) {
      if (j !== 0) {
        prefix += words[i][j - 1];
        suffix = suffix.slice(1);
        reversedPrefix = words[i][j - 1] + reversedPrefix;
        reversedSuffix = reversedSuffix.slice(0, reversedSuffix.length - 1);
      }

      if (j !== 0 && prefix === reversedPrefix && reversedSuffix in dict && dict[reversedSuffix] !== i) {
        result.push([dict[reversedSuffix], i]);
      }

      if (suffix === reversedSuffix && reversedPrefix in dict && dict[reversedPrefix] !== i) {
        result.push([i, dict[reversedPrefix]]);
      }
    }
  }
  return result;
};

// palindromePairsN2(['bat', 'tab', 'cat']);
