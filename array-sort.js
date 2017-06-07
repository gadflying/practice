/**
* Rearrange an array with even numbers first and odd numbers after
**/
const arrayEvenOddValue = (numbers) => {
  const sortedNumbers = numbers.reduce((memo, number) => {
    memo[number % 2 === 0 ? 'unshift' : 'push'](number);
    return memo;
  }, []);

  return sortedNumbers;
};

console.log(arrayEvenOddValue([1, 8, 4, 6, 7, 19, 11, 2]));

/**
* Given an array of integers, sort the array so that all odd
* indexes are greater than the even indexes.
**/
const arraySortIndexEvenOdd = (numbers) => {
  const EVEN = 0;
  const ODD = 1;
  const sortedNumbers = numbers
    .reduce((memo, number, index) => {
      memo[index % 2 === 0 ? EVEN : ODD].push(number);
      return memo;
      // return [
      //   memo[EVEN].concat(index % 2 === 0 ? number : []),
      //   memo[ODD].concat(index % 2 === 0 ? [] : number),
      // ];
    }, [[], []])
    .map(list => list.slice().sort((a, b) => a - b))
    .reduce((memo, list) => memo.concat(list), []);

  return sortedNumbers;
};

console.log(arraySortIndexEvenOdd([0, 1, 2, 3, 4, 5, 6, 7]));
