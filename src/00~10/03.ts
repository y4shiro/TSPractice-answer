const q03 = () => {
  type Foo = {
    name?: string;
    age?: number;
  };

  type NameOnly = Pick<Foo, 'name'>;

  // 別解
  // Pick<> の定義そのもの
  type PickAlt<T, K extends keyof T> = {
    [P in K]: T[P];
  };
  type NameOnlyAlt = PickAlt<Foo, 'name'>;
};
