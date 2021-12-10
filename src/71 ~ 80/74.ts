const q74 = () => {
  const a = { a: 'A', b: 'B', c: 1 };

  type ExtractCValue<
    T extends Record<string, string | number>,
    V extends T[keyof T]
  > = V extends number ? V : never;

  const c: ExtractCValue<typeof a, 1> = 1;
};
