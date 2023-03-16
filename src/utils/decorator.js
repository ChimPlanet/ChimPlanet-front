export function data(Class) {
  // store 'data' to __data
  return (data) => {
    const instance = new Class();
    instance.data = data;
    return instance;
  };
}

/**
 * ! 반드시 @data 클래스에만 사용할 것
 */
export function field(name, preprocess) {
  return function () {
    let val;
    return {
      set: function () {
        throw Error("You can't write Data Class's Property");
      },
      get: function () {
        if (val === undefined) {
          val = preprocess ? preprocess(this.data[name]) : this.data[name];
        }
        return val;
      },
      enumerable: true,
      configurable: true,
    };
  };
}
