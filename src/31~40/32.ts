const q32 = () => {
  type F = {
    foo: string;
    bar: number;
  };
  const E: Record<keyof F, string> = { foo: 'fafa', bar: 'fafa' };
};
