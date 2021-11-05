const q12 = () => {
  type PropNullable<T> = { [P in keyof T]: T[P] | null };

  interface User {
    name: string;
    age: number;
    money: null;
  }

  const obj: PropNullable<User> = { name: 'taro', age: 20, money: null };
  console.log(obj);
};
q12();
