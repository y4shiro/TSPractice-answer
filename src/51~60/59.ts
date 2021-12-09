const q59 = () => {
  type User = { name: string; age: number };

  type Value<T> = T[keyof T];
  type ValueType = Value<User>;

  // 別解
  type AnotherValue<T> = { [K in keyof T]: T[K] }[keyof T];
  type AnotherValueType = AnotherValue<User>;
};
