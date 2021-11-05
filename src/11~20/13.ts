const q13 = () => {
  let createObj = <T extends unknown>(obj: T) => {
    let o = {} as { [P in keyof T]: string };
    for (const key in obj) {
      o[key] = String(obj[key]);
    }
    return o;
  };

  const anotherFun = createObj;
};
q13();
