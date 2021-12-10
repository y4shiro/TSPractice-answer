const q73 = () => {
  type TransitionStyles<T extends string> = {
    [K in T]: Object;
  };

  type TransitionStylesKeys = 'entered' | 'exiting' | 'exited' | 'entering';

  const b: TransitionStyles<TransitionStylesKeys> = {
    entered: {},
    exiting: {},
    exited: {},
    entering: {},
    // eee: 'fa',
  };
};
