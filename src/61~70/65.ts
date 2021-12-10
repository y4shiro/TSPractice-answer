const q65 = () => {
  type A = { name: string };
  type B = { age: number };

  type T1 = keyof (A & B);
};
