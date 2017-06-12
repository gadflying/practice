/**
518. Coin Change 2
https://leetcode.com/problems/coin-change-2/#/description

You are given coins of different denominations and a total amount of money. Write a function to
compute the number of combinations that make up that amount. You may assume that you have infinite
number of each kind of coin.

Note: You can assume that

0 <= amount <= 5000
1 <= coin <= 5000
the number of coins is less than 500
the answer is guaranteed to fit into signed 32-bit integer
Example 1:

Input: amount = 5, coins = [1, 2, 5]
Output: 4
Explanation: there are four ways to make up the amount:
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
Example 2:

Input: amount = 3, coins = [2]
Output: 0
Explanation: the amount of 3 cannot be made up just with coins of 2.
Example 3:

Input: amount = 10, coins = [10]
Output: 1

**/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const coinChange = (amount, coins) => {
  if (amount <= 0) {
    return [];
  }

  const sortedCoins = (coins || []).slice().sort((a, b) => a - b);
  console.log('sortedCoins', sortedCoins);
  const cachedCombos = [];
  const allCombos = [];

  sortedCoins.forEach((coin) => {
    let combos = [];
    let int;
    let frac;
    let change = amount;
    console.log('change', change, coin);
    int = Math.floor(change / coin);
    frac = change % coin;
    change -= int * coin;

    const comboStem = Array(int).fill(coin);
    const comboTails = coinChange(change, sortedCoins.slice(0, -1));

    if (frac !== 0) {
      combos = comboTails.reduce((memo, comboTail) => {
        memo.push(comboStem.concat(comboTail));
        return memo;
      }, []);
    } else {
      combos = comboStem;
    }

    allCombos.push(combos);
    combos = [];
  });

  // look for combos.
  // If no combos, then generate the combo and add it
  return allCombos;
};

console.log(coinChange(7, [3, 2, 1]));
