const q63 = () => {
  // function stringLiterals<T extends string>(...args: T[]): T[] {
  //   return args;
  // }
  // type OneOf<T extends unknown[]> = T extends (infer R)[] ? R : never;

  // const values = stringLiterals('A', 'B');
  // type Foo = OneOf<typeof values>;

  type OneOf<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
    infer ElementType
  >
    ? ElementType
    : never;

  const values = ['A', 'B'] as const;
  type Foo = OneOf<typeof values>;

  const v1: Foo = 'A'; // ok
  // const v2: Foo = 'D'; // error
};
