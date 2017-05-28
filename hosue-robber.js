/**
198. House Robber
https://leetcode.com/problems/house-robber/#/description

You are a professional robber planning to rob houses along a street. Each house has a certain amount
 of money stashed, the only constraint stopping you from robbing each of them is that adjacent
  houses have security system connected and it will automatically contact the police if two
   adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house,
determine the maximum amount of money you can rob tonight without alerting the police.
**/

/**
 * @param {number[]} nums
 * @return {number}
 */
 // Not optimal
const rob2 = (nums) => {
  const allMoneys = nums.reduce((prev, money, index) => (
    Object.assign(prev, { [money]: (prev[money] || []).concat(index) })
  ), {});

  const sorted = nums.slice().sort((a, b) => b - a);

  const housesToRob = [];
  sorted.forEach((amount) => {
    const houseNumbers = allMoneys[amount] || [];
    houseNumbers.forEach((houseNumber) => {
      const robThisHouse = !(housesToRob[houseNumber]
        || housesToRob[houseNumber - 1]
        || housesToRob[houseNumber + 1]
      );

      if (robThisHouse) {
        housesToRob[houseNumber] = amount;
      }
    });
  });

  const totalAmountRobbed = housesToRob.reduce((prevTotal, amount) => prevTotal + amount, 0);
  return totalAmountRobbed;
};
rob2([]);

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = nums => (
  nums.reduce((total, amount) => (
    [total[1], Math.max((total[0] + amount), total[1])]
  ), [0, 0])[1]
);

rob([2, 4, 3]);
