const q60 = () => {
  type User = { name: string; age: number; id: number };

  type NumberType<T> = {
    [K in keyof T]: T[K] extends number ? K : never;
  }[keyof T];

  type UserNumberType = Pick<User, NumberType<User>>;
};
