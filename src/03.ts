type Foo = {
  name?: string;
  age?: number;
};

type Picked = Pick<Foo, 'name'>;
