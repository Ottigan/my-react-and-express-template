function uuidv4() {
  const hexadecimals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
  const hexadecimalCount = hexadecimals.length - 1;
  const variantOne = [8, 9, 'a', 'b'];
  const variantCount = variantOne.length - 1;

  const id = [...Array(36).keys()].map((_, i) => {
    if ([8, 13, 18, 23].includes(i)) return '-';

    if (i === 14) {
      const uuidVersion = 4;

      return uuidVersion;
    }

    if (i === 19) return variantOne[Math.round(Math.random() * variantCount)];

    return hexadecimals[Math.round(Math.random() * hexadecimalCount)];
  }).join('');

  return id;
}

function* sequentialIdGenerator() {
  let i = 0;

  while (true) {
    yield i += 1;
  }
}

export {
  uuidv4,
  sequentialIdGenerator,
};
