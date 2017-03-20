// Given two lists find the intersection of numbers

const list1 = [1, 2, 3, 4, 4, 2];
const list2 = [3, 4, 5, 6, 9];

const differenceSet = (list1 = [], list2 = []) => {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return [...new Set([...set1].filter(item => !set2.has(item)))];
}
differenceSet(list1, list2);


const intersectionSet = (list1 = [], list2 = []) => {
  const set1 = new Set(list1);
  const set2 = new Set(list2);
  return [...new Set([...set1].filter(item => set2.has(item)))];
};
intersectionSet(list1, list2);

const unionSet2 = (list1 = [], list2 = []) => [...new Set([...list1, ...list2])];
const unionSet1 = (list1 = [], list2 = []) => Array.from(new Set([...list1, ...list2]));
unionSet1(list1, list2);
unionSet2(list1, list2);



// Version 1: Use two reduces
const intersection1 = (list1 = [], list2 = []) => {
  const hash1 = list1.reduce((history, key) => {
    history[key] = (history[key] || 0) + 1;
    return history;
  }, {});

  const intersecting = list2.reduce((history, key) => {
    if (hash1[key]) {
      history[key] = key;
    }
    return history;
  }, {});

  return Object.values(intersecting);
}

intersection1(list1, list2);
// => [3, 4]

// Version 2: User Reduce and filter
const intersection2 = (list1 = [], list2 = []) => {
  const hashes = list1.reduce((history, key) => {
    history[key] = true;
    return history;
  }, {});

  return list2.filter(item => !!hashes[item]);
}

intersection2(list1, list2);
// => [3, 4]

const union = (list1 = [], list2 = []) => {
  const hashes = list1.reduce((history, key) => {
    history[key] = key;
    return history;
  }, {})

  list2.forEach((item) => {
    hashes[item] = item;
  })
  return Object.values(hashes);
}

union(list1, list2);
// => [1, 2, 3, 4, 5, 6]

const difference = (list1 = [], list2 = []) => {
  const hashes = list1.reduce((history, key) => {
    history[key] = key;
    return history;
  }, {});

  list2.filter();
}
