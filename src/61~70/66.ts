const q66 = () => {
  type MyUnionType =
    | { foo: 'a'; bar: 1 }
    | { foo: 'b'; bar: 2 }
    | { foo: 'c'; bar: 3 };

  type T1 = MyUnionType['foo'];

  // 別解
  type PickField<T, K extends string> = T extends Record<K, any> ? T[K] : never;
  type T2 = PickField<MyUnionType, 'foo'>;
};
