import { User } from "./models/User";

const user = new User({ name: 'jdhsd', age: 359325235353232 })

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string { // set up a getter property since we aren't making any real functionality here
    return ` ${this.firstName} ${this.lastName}`
  }
}

const person = new Person('firstname', 'lastname')

console.log(person.fullName);
