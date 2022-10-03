import { AxiosResponse } from 'axios';
import { Attributes } from './Attributes';
import { Eventing } from './Eventing'
import { Sync } from './Sync';
 
export interface UserProps{
  name?: string;
  age?: number;
  id?: number;
}                 

const rootUrl = 'http://localhost:3000/users';

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

  fetch(): void {
    const id = this.get('id');

    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without an id')
    }

    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data); // reference the set method on this page, so it also triggers change
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => this.trigger('error'));
  }
}