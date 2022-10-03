import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Attributes } from "./Attributes";
import { Eventing } from "./Eventing";
 
export interface UserProps{
  name?: string;
  age?: number;
  id?: number;
}                 

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> { // passing in UserProps, so T has it's interface
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attributes<UserProps>(attrs),
      new Eventing(),
      new ApiSync<UserProps>(rootUrl)
    )
  }
} 