const q61 = () => {
  const isNarrowScreen = () => false;
  export function wideNarrow<T>(wide: T, narrow: T) {
    return isNarrowScreen() ? narrow : wide;
  }

  const a = wideNarrow(0, 8);
  const extendedAreaHeight = 26;
  const b = a + extendedAreaHeight;
};
