const q68 = () => {
  interface NumberMap {
    [key: string]: number;
  }

  function createMap<T extends NumberMap>(v: T) {
    return v;
  }

  const map = createMap({
    one: 1,
    two: 2,
    three: 3,
  });

  // const lol = map.asdf; // 存在しないキーなのでエラー

  type MyKeys = keyof typeof map;
};
