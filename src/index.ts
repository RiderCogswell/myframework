import { User } from "./models/User";

const user = new User({ name: 'jdhsd', age: 359325235353232 })

user.events.on('change', () => {
  console.log('change');
})

user.events.trigger('change')