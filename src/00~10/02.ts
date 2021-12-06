const q02 = () => {
  interface Foo {
    bar: string;
    baz: number;
  }

  type PartialFoo = Partial<Foo>;

  // 別解
  type Optionals<T> = {
    [K in keyof T]?: T[K];
  };
  type OptionalFoo = Optionals<Foo>;
};
