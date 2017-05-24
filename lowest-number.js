
export const getNextId = (ids = []) => {
  let lowestId = null;
  let biggestId = -1;

  // Build table
  const allIds = ids.reduce((memo, id) => {
    // Keep track of lowest number
    lowestId = lowestId === null || lowestId > id ? id : lowestId;
    biggestId = biggestId < id ? id : biggestId;
    memo[id] = true;
    return memo;
  }, {});

  // Get length of array
  // Iterate from lowest number through keys of table
  const nextId = [...Array(ids.length).keys()]
    .map(id => id + lowestId)
    .find(id => !allIds[id]);

  return nextId || biggestId + 1;
};

it('should get the next Id', () => {
  const { getNextId } = helpers;
  expect(getNextId([])).toEqual(0);
  expect(getNextId([1])).toEqual(2);
  expect(getNextId([0, 1])).toEqual(2);
  expect(getNextId([0, 1, 5, 6])).toEqual(2);
  expect(getNextId([100, 104, 101, 1000, 102])).toEqual(103);
});
