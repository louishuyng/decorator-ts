export function logProperty(target: Object, propertyName: string) {
  // propery value
  let _val = this[propertyName];

  // property getter mehod
  const getter = () => {
    console.log(`Get: ${propertyName} => ${_val}`);
  };

  // property setter method
  const setter = (newVal) => {
    console.log(`Set: ${propertyName} => ${newVal}`);
    _val = newVal;
  };

  // Delete property
  if (delete this[propertyName]) {
    // Create new property with getter and setter
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  }
}
j
