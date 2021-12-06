const q04 = () => {
  type Foo = {
    name?: string;
    age?: number;
  };

  type OmitAge = Omit<Foo, 'age'>;

  // 別解
  type OmitAlt<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
  type OmitAgeAlt = OmitAlt<Foo, 'age'>;
};
