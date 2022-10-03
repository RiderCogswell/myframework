import { Attributes } from './Attributes';
import { Eventing } from './Eventing'
import { Sync } from './Sync';
 
export interface UserProps{
  name?: string;
  age?: number;
  id?: number;
}                 

const rootUrl = 'http://localhost/3000/users';

export class User  {
  public events: Eventing = new Eventing(); // hardcoded poor approach
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl) // pass in UserProps to the sync function
  public attributes: Attributes<UserProps>;
  
  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update); 
    this.events.trigger('change');
  }
}