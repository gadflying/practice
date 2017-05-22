// Implement multiple ways to do a fibanacci sequence
// Return the value of fibonacci number at nth sequence

// Version 1
// O(1.618^n)
function fibRecursive(n) {
  return fibDeep(n);

  function fibDeep(n) {
    if (n <= 2) return 1;
    return fibDeep(n - 1) + fibDeep(n - 2);
  }
}

// Version 2
// Caches value for closer to O(1) performance. Less calls being made.
function fibRecursiveCache(n) {
  const cache = [];

  return fibDeep(n);

  function fibDeep(n) {
    if (n <= 2) return 1;

    if (cache[n]) {
      return cache[n];
    }

    const value = fibDeep(n - 1) + fibDeep(n - 2);
    cache[n] = value;
    return value;
  }
}

// Version 3
// Uses a normal for loop. Calculate from the beginning. O(n)
function fibLoop(n) {
  return fibDeep(n);

  function fibDeep(n) {
    if (n <= 2) return 1;

    let i = 3;
    let a = 1;
    let b = 1;
    let c;
    while (i <= n) {
      c = a + b;
      a = b;
      b = c;
      i += 1;
    }

    return c;
  }
}

function fibLoop2(n) {
  let a = 1,
    b = 1,
    c,
    i = 2;

  if (n <= 2) return 1;
  while (i < n) {
    c = a + b;
    a = b;
    b = c;
    i += 1;
  }

  return c;
}

const fibR2 = (n) => {
  const fibDeep = (nextN) => {
    if (nextN <= 2) {
      return 1;
    }

    return fibDeep(nextN - 1) + fibDeep(nextN - 2);
  };

  return fibDeep(n);
};

const fibR2Cache = (n) => {
  const cache = [];
  const fibDeep = (nextN) => {
    if (nextN <= 2) {
      return 1;
    }

    if (cache[nextN]) {
      return cache[nextN];
    }

    const value = fibDeep(nextN - 1) + fibDeep(nextN - 2);
    cache[nextN] = value;
    return value;
  };

  return fibDeep(n);
};

console.log(fibR2(4));
console.log(fibR2(10));
console.log(fibR2Cache(100));
