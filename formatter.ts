const config = {
  test: __("test"),
};

export const format = (str) => config[str] || str;
