const q38 = () => {
  const getDefaultProps = () => {
    return { name: 'hoge' };
  };
  const defaultProps = getDefaultProps();
  const o = { name: 'hoge' };
  function a(o = defaultProps) {
    return o;
  }

  a(o);
  a();
};
