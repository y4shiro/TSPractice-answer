const q69 = () => {
  type Person = {
    name: string;
    age: number;
    id: number;
  };
  const me = { name: 'a', age: 11, id: 999 };

  Object.keys(me).forEach((key) => {
    console.log(me[key as keyof Person]);
  });
};
