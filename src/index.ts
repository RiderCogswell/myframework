import { User } from "./models/User";

const user = new User({ name: 'jdhsd', age: 359325235353232 })

console.log(user.get('name'));


user.on('change', () => {
  console.log('user changed');
})

user.set({ name: 'nejfwnwf'})