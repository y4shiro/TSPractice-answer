const q30 = () => {
  type YukariNoChi = 'tokyo';

  const obj = {
    name: 'kenji',
    age: 99,
    born: 'tokyo',
    live: 'tokyo',
  };

  type Obj = {
    name: string;
    age: number;
    born: YukariNoChi;
    live: YukariNoChi;
  };

  const obj2 = {
    born: 'tokyo',
    live: 'tokyo',
  } as const;

  type OnlySpecificProperty<T> = Pick<
    T,
    { [K in keyof T]: T[K] extends YukariNoChi ? K : never }[keyof T]
  >;

  function fun(onlyYukari: OnlySpecificProperty<Obj>) {
    return onlyYukari;
  }

  const result = fun(obj2);
};
