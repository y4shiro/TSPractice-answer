type Foo = {
  name?: string;
  age?: number;
};

type OmitAge = Omit<Foo, 'age'>;
