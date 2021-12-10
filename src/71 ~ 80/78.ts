const q78 = () => {
  type ActivityLog = {
    lastEvent: Date;
    events: {
      id: string;
      timestamp: Date;
      type: 'Read' | 'Write';
    }[];
  };

  let activityLog: ActivityLog = {
    lastEvent: new Date(),
    events: [{ id: '1', timestamp: new Date(), type: 'Read' }],
  };

  type Get = {
    <O extends object, K1 extends keyof O>(o: O, key: K1): O[K1];
    <O extends object, K1 extends keyof O, K2 extends keyof O[K1]>(
      o: O,
      key: K1,
      key2: K2
    ): O[K1][K2];
    <
      O extends object,
      K1 extends keyof O,
      K2 extends keyof O[K1],
      K3 extends keyof O[K1][K2]
    >(
      o: O,
      key: K1,
      key2: K2,
      key3: K3
    ): O[K1][K2][K3];
  };

  const get: Get = (o: any, ...keys: string[]) => {
    let result = { ...o };
    keys.forEach((k) => {
      result = result[k];
      return result;
    });
  };

  let lastEvent = get(activityLog, 'events', 0, 'type');
};
