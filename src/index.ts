import { User } from "./models/User";

const user = new User({});

user.on('change', () => {console.log('change2');
})
user.on('change', () => {console.log('change2')})
user.on('change', () => {console.log('change2jdsabojgbf')})
user.on('save', () => {console.log('save')})


user.trigger('save')