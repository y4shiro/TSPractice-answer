const q71 = () => {
  const obj = { a: 'A', b: 'B', c: 1 } as const;
  type T1 = typeof obj[keyof typeof obj];
};
