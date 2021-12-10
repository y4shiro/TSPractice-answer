const q86 = () => {
  const date = <Y extends number, M extends number, D extends number>(
    years: Y,
    month: M,
    date: D
  ) => {
    return `${years}-${month}-${date}` as `${Y}-${M}-${D}`;
  };
  const result = date(2020, 10, 10);
};
