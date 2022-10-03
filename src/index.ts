import { User } from "./models/User";

const user = new User({ name: 'newwwwr', age: 234, id: 1 })

user.on('save', () => {
  console.log(user);
})

user.save();