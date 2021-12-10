const q64 = () => {
  const source = {
    doorToDoor: 'delivery at door',
    airDelivery: 'flying in',
    specialDelivery: 'special delivery',
    inStore: 'in-store pickup',
  };
  const a: Record<keyof typeof source, string> = source;

  const aa = a['name']; // error
};
