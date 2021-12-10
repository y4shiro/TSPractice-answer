const q70 = () => {
  type User = {
    id: string;
    email: string;
    password: string;
  };

  type UserProfile = User & { name: string; job: string };

  function insert<T extends User>(user: Exact<User, T>) {
    console.log(user);
  }

  type Exact<TExpected, TActual extends TExpected> = TExpected extends TActual
    ? TExpected
    : never;

  const userProfile = {
    id: '1',
    email: 'fa@example.com',
    password: '000',
  };
  insert(userProfile);

  const userProfile1 = {
    id: '1',
    email: 'fa@example.com',
    password: '000',
    name: '222',
    job: 'engineer',
  };
  // insert(userProfile1); // 余計なプロパティがあるのでエラー
};
