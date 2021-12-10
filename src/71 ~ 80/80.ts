const q80 = () => {};

type SomeObject =
  | { type: 'a'; a: string }
  | { type: 'b'; b: number }
  | { type: 'c'; c: boolean };

declare const someObj: SomeObject;

if (someObj.type === 'c') {
  someObj.c;
}

// switch で分岐する
const check = (someObj: SomeObject) => {
  switch (someObj.type) {
    case 'a':
      someObj.a;
      return;
    case 'b':
      someObj.b;
      return;
    case 'c':
      someObj.c;
      return;
    default:
      new Error('not provided type');
  }
};
