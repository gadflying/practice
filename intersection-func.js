// Given two lists find the intersection of numbers

const list1 = [1, 2, 3, 4, 4, 2];
const list2 = [3, 4, 5, 6];

const intersection = (list1, list2) => {
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

intersection(list1, list2);
// => [3, 4]
