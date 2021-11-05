const q15 = () => {
  let arr = <T extends any[]>(...rest: T) => {
    return rest;
  };
  arr(['a', 1, true, null]);
};
q15();
