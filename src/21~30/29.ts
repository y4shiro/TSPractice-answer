const q29 = () => {
  interface Func {
    (e: number): number;
  }

  function fa(callback: Func, e: number) {
    return callback(e);
  }

  const fun: Func = (e) => 1 * e;
  const v = fa(fun, 1);
};
