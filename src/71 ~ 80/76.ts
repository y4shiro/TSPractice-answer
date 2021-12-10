const q76 = () => {
  const value = {
    data: {
      name: { id: 1 },
    },
  };

  type T1 = typeof value['data']['name'];

  // 別解
  type Data = {
    data: {
      name: { id: number };
    };
  };

  const getNameValue = (value: Data) => {
    return value.data.name;
  };
  type B = ReturnType<typeof getNameValue>;
};
