export class Attributes<T> {
  constructor(private data: T) {};
  // generic constraint: K acts as a key of T, aka UserProps.
  //  SOOO, this means that we can access the keys of UserProps 
  // and use them as a type 
  get = <K extends keyof T>(key: K): T[K] => { // T[K] = array[index] -> Setting this method as an arrow function, we bind the funcs scope, letting 'this' work always
    return this.data[key]
  };

  set(update: T): void {
    Object.assign(this.data, update);
  };

  getAll(): T {
    return this.data;
  };
}