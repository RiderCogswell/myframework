export class Attributes<T> {
  constructor(private data: T) {};

  get<K extends keyof T>(key: K): T[K] { // generic constraint: K acts as a key of T, aka UserProps. SOOO, this means that we can access the keys of UserProps and 
    return this.data[key]
  };

  set(update: T): void {
    Object.assign(this.data, update);
  };
}