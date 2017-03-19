// Given two lists find the intersection of numbers

const list1 = [1, 2, 3, 4, 4, 2];
const list2 = [3, 4, 5, 6];

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
