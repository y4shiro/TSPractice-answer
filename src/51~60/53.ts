const q53 = () => {
  interface SomeObject {
    firstKey: string;
    secondKey: string;
    thirdKey: { id: { name: string } };
  }

  type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
  };

  const b: RecursivePartial<SomeObject> = {};
  b.thirdKey = {};

  /// 一部のプロパティをのぞいて再帰的にオプショナルにする型
  type PartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;

  // //ok
  // const c: PartialExcept<SomeObject, 'thirdKey'> = {
  //   firstKey: '',
  //   secondKey: '',
  //   thirdKey: { id: { name: {} } },
  // };

  // // ok
  // const d: PartialExcept<SomeObject, 'thirdKey'> = {
  //   thirdKey: { id: { name: {} } },
  // };

  // // error
  // const e: PartialExcept<SomeObject, 'thirdKey'> = {};
};
