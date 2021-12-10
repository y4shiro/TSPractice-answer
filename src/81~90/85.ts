const q85 = () => {
  const obj = {
    foo: 'foo',
    bar: 'bar',
  };

  const keysArray = Object.keys(obj);
  console.log(keysArray);

  // as で型アサーションする例
  const keysArray1 = Object.keys(obj) as (keyof typeof obj)[];

  // keys 関数を作る例
  const keys = Object.keys as <T>(o: T) => Extract<keyof T, string>[];
  const keysArray2 = keys(obj);
};
