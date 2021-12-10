const q79 = () => {
  type Type = {
    a: string;
    b: number;
    c: (ind: string) => void;
  };

  type Key<K extends keyof Type> = Type[K];
  const a: Key<'a'> = 'a';
  const b: Key<'b'> = 10;
  const c: Key<'c'> = (a) => console.log(a);
};
