import Collection from './../Collection';

export function resource(type) {
  return (target, key, descriptor) => {
    const fn = descriptor.value;
    return {
      configurable: true,
      enumerable: false,
      value(...args) {
        return fn.apply(this, args).then(response => new type(response, this.client || this));
      }
    };
  };
}

export function collection(type) {
  return (target, key, descriptor) => {
    const fn = descriptor.value;
    return {
      configurable: true,
      enumerable: false,
      value(...args) {
        return fn.apply(this, args).then(response => {
          const array = response.map(data => new type(response, this.client || this));
          return new Collection(array);
        });
      }
    };
  };
}