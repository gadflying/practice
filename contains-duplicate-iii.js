/**
220. Contains Duplicate III
https://leetcode.com/problems/contains-duplicate-iii/#/description

Given an array of integers, find out whether there are two distinct indices i and j in the array
such that the absolute difference between nums[i] and nums[j] is at most t and the absolute
difference between i and j is at most k.
**/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
 /* eslint-disable no-restricted-properties */
const containsNearbyAlmostDuplicate4 = (nums, k, t) => {
  if (!nums || nums.length < 2 || k < 1 || t < 0) {
    return false;
  }

  // A hack because javascript does math funny. Number.MIN_SAFE_INTEGER doesn't subtract correctly
  const MIN_VALUE = -Math.pow(2, 32);
  const buckets = new Map();

  return nums.some((num, index) => {
    const mappedNum = num - MIN_VALUE;
    const bucketKey = Math.trunc(mappedNum / (t + 1));
    const duplicateFound = buckets.has(bucketKey)
      || (buckets.has(bucketKey - 1) && mappedNum - buckets.get(bucketKey - 1) <= t)
      || (buckets.has(bucketKey + 1) && buckets.get(bucketKey + 1) - mappedNum <= t);

    if (duplicateFound) {
      return true;
    }

    if (buckets.size >= k) {
      const lastBucketKey = Math.trunc((nums[index - k] - MIN_VALUE) / (t + 1));
      buckets.delete(lastBucketKey);
    }

    buckets.set(bucketKey, mappedNum);
    return false;
  });
};

containsNearbyAlmostDuplicate4([], 1, 1);

const containsNearbyAlmostDuplicate = (nums, k, t) => {
  if (!nums || nums.length < 2 || k < 1 || t < 0) {
    return false;
  }

  // A hack because javascript does math funny. Number.MIN_SAFE_INTEGER doesn't subtract correctly
  const MIN_VALUE = -Math.pow(2, 32);
  const buckets = {};
  let bucketSize = 0;

  const result = nums.some((num, index) => {
    const mappedNum = num - MIN_VALUE;
    const bucketKey = Math.trunc(mappedNum / (t + 1));
    const duplicateFound = buckets[bucketKey] !== undefined
      || (buckets[bucketKey - 1] !== undefined && mappedNum - buckets[bucketKey - 1] <= t)
      || (buckets[bucketKey + 1] !== undefined && buckets[bucketKey + 1] - mappedNum <= t);

    if (duplicateFound) {
      return true;
    }

    if (bucketSize >= k) {
      const lastBucketKey = Math.trunc((nums[index - k] - MIN_VALUE) / (t + 1));
      delete buckets[lastBucketKey];
      bucketSize -= 1;
    }

    buckets[bucketKey] = mappedNum;
    bucketSize += 1;
    return false;
  });

  return result;
};

console.log(containsNearbyAlmostDuplicate([], 0, 0));
console.log(containsNearbyAlmostDuplicate([-1, -1], 1, -1));
console.log(containsNearbyAlmostDuplicate([0, 2147483647], 1, 2147483647));
console.log(containsNearbyAlmostDuplicate([0], 0, 0));
console.log(containsNearbyAlmostDuplicate([7, 2, 8], 2, 1));

// Time limit exceeded
const containsNearbyAlmostDuplicate2 = (nums, k, t) => {
  const cache = [];
  const result = nums.some((num, index) => {
    const innerResult = [...Array(Math.abs(t * 2) + 1).keys()]
      .map(val => num + (val - t))
      .some((cacheKey) => {
        if (cache[cacheKey] !== undefined && Math.abs(cache[cacheKey] - index) <= k) {
          return true;
        }
        return false;
      }
    );

    cache[num] = index;
    return innerResult;
  });

  return result;
};

// Attempt 2: Problems with negative numbers
const containsNearbyAlmostDuplicate3 = (nums, k, t) => {
  if (t < 0 || !nums || nums.length < 2 || k < 1) {
    return false;
  }
  const reverseLookup = [];
  nums.forEach((num, index) => {
    reverseLookup[num] = (reverseLookup[num] || []).concat(index);
  });

  if ((t * 2) + 1 > reverseLookup.length) {
    return false;
  }

  const result = nums.some((num, index) => {
    const innerResult = reverseLookup.slice(num - t, num + t + 1).some((indexes) => {
      const indexResult = indexes.some(index2 => (
        Math.abs(index2 - index) <= k && index2 !== index
      ));

      return indexResult;
    });

    return innerResult;
  });

  return result;
};

containsNearbyAlmostDuplicate3([0, 2147483647], 1, 1);
containsNearbyAlmostDuplicate2([0, 2147483647], 1, 1);
