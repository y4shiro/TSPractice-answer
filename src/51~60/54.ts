const q54 = () => {
  // 自分の回答
  type MyUser = {
    name: string | null;
    age: number | null;
  };

  // 実際の解答例
  type E = { name: string; age: number };
  type User<T> = { [K in keyof T]: T[K] | null };

  const e: User<E> = { name: null, age: null };
};
