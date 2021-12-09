const q58 = () => {
  type F<T> = T extends (a: infer U) => any ? U : T;
  type User = { name: string; age: number };
  const f = (a: User) => a;

  const a: F<User> = f({ name: 'kenji', age: 9 }); // User 型
  const b: F<string> = 'Hello'; // string 型:w
};
