const q75 = () => {
  const objArray = [
    { foo: 1, bar: 2 },
    { foo: 3, bar: 4 },
    { foo: 5, bar: 6 },
  ];

  function getFooValue(arr: typeof objArray) {
    return objArray.map(({ foo }) => foo);
  }
  const result = getFooValue(objArray); // (1 | 3 | 5)[]
};
