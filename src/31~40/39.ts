const q39 = () => {
  type Animal = { name: string; run: boolean };
  type Bird = { name: string; fly: boolean };
  const animal = { name: 'tigger', run: true };
  const bird = { name: 'condol', fly: true };

  type NotHumman = Animal | Bird;

  const a = (b: NotHumman) => {
    if ('run' in b) {
      b.run;
    }
  };
};
