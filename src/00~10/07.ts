const q07 = () => {
  interface Part {
    name: string;
    age: number;
    add(): number;
  }

  type MethodOnly<T> = {
    [K in keyof T]: T[K] extends Function ? K : never;
  }[keyof T];

  type MethodName = MethodOnly<Part>;
};
