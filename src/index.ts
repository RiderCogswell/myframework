import { User } from "./models/User";

const user = new User({ id: 2 })

user.fetch()

setTimeout(() => {
  console.log(user);
  
}, 4000)