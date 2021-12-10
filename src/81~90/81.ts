const q81 = () => {
  interface Hoge {
    a: string;
    (arg: string): void;
  }

  const hoge = (arg: string) => {
    console.log(arg);
  };
  const a = { a: 'foo' };
  const f: Hoge = Object.assign(a, hoge);
};
