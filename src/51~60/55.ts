const q55 = () => {
  type Diff<T, U> = T extends U ? never : T;

  const t1: Diff<'a' | 'b', 'b' | 'c'> = 'a';
};
