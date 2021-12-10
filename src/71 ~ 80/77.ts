const q77 = () => {
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

  function get<T, K extends keyof T>(activityLog: T, key: K) {
    return activityLog[key]; // エラー
  }
  let lastEvent = get(activityLog, 'lastEvent');

  // 別解
  type Get = <T, K extends keyof T>(activityLog: T, key: K) => T[K];
  let getAnother: Get = (activityLog, key) => {
    return activityLog[key];
  };
  let lastEventAnother = getAnother(activityLog, 'lastEvent');
};
