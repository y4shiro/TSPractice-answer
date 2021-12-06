const q12 = () => {
  type PropNullable<T> = { [P in keyof T]: T[P] | null };

  interface User {
    name: string;
    age: number;
    money: number;
  }

  const obj: PropNullable<User> = { name: 'taro', age: 99, money: null };
};
