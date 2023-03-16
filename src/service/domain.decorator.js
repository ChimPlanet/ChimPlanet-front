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
export function field(responseFieldName, preprocess) {
  return function (self, fieldName) {
    return {
      set: function () {
        throw Error("You can't write Data Class's Property");
      },
      get: function () {
        return (this['__' + fieldName] ??= preprocess
          ? preprocess(this.data[responseFieldName])
          : this.data[responseFieldName]);
      },
      enumerable: true,
      configurable: true,
    };
  };
}