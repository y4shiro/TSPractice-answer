const q84 = () => {
  type Getkeys<U> = U extends Record<infer K, any> ? K : never;

  type UnionToIntersection<U extends object> = {
    [K in Getkeys<U>]: U extends Record<K, infer T> ? T : never;
  };

  type Union = { a: 'A' } | { b: 'B' };
  type Transformed = UnionToIntersection<Union>;
};
