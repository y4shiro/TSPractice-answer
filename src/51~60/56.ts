const q56 = () => {
  const t3 = { name: 'kenji', age: 99 } as const;
  type T2 = typeof t3;
  type T3 = keyof typeof t3;
};
