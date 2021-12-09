const q50 = () => {
  interface Foo {
    name: string;
  }
  const other = { name: 'kenji', age: 90 };
  let obj: Foo = other;

  // 何の値が来るかわからない場合
  interface FooAny {
    name: string;
    [other: string]: any;
  }

  let objAny: FooAny = { name: 'kenji', age: 90 };
};
