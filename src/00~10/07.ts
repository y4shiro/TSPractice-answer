interface Part {
  name: string;
  age: number;
  add(): number;
}
// 上記の型定義からメソッド名だけを取り出した型を作る

const obj = {
  name: 'Taro',
  age: 20,
  add: () => 1 + 2,
};

type FunctionPropertyNames<T> = {
  [K in keyof T]: T[K] extends Function ? K : never;
}[keyof T];

type result = FunctionPropertyNames<Part>;
