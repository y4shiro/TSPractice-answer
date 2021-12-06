const q02 = () => {
  type Foo = {
    name?: string;
    age?: number;
  };

  type RequiredFoo = Required<Foo>;

  // 別解
  type RequiredType<T> = {
    [K in keyof T]-?: T[K];
  };
  type altRequiredFoo = RequiredType<Foo>;
};
