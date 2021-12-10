const q67 = () => {
  interface Foo {
    foo: number;
    common: string;
  }

  interface Bar {
    bar: number;
    common: string;
  }

  function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
  }

  function fooAndBar(arg: Foo | Bar) {
    if (isFoo(arg)) return arg.foo;
    else return arg.bar;
  }

  const result = fooAndBar({ foo: 9, common: 'common' });
};
