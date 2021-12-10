const q72 = () => {
  const userByIdResult = {
    data: {
      userById: {
        id: 123,
        username: 'joseph',
      },
    },
  };

  const userByUsernameResult = {
    data: {
      userByUsername: {
        id: 123,
        username: 'joseph',
      },
    },
  };

  type GraphQLResponse<QueryKey extends string, ResponseType> = {
    data: {
      [K in QueryKey]: ResponseType;
    };
  };

  interface User {
    username: string;
    id: string;
  }

  type UserByIdResponse = GraphQLResponse<'userById', User>;
  type UserByUsernameResponse = GraphQLResponse<'userByUsername', User>;
};
