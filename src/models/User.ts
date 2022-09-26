import axios, { AxiosResponse } from 'axios';

interface UserProps{
  name?: string;
  age?: number;
  id?: number;
}

type Callback = () => void // type alias

export class User {
  // act as an eventBank for the on method
  events: { [key: string]: Callback[] } = {}; // we use key:string when we REALLY do not know what properties will be passed

  constructor(private data: UserProps) {};

  get(propName: string): (number | string) {
    return this.data[propName]
  };

  set(update: UserProps): void {
    Object.assign(this.data, update);
  };

  on(eventName: string, callback: Callback): void {
    const handlers = this.events[eventName] || []; // assign events OR an empty array
    handlers.push(callback);
    this.events[eventName] = handlers;
  };

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) {
      return;
    }

    handlers.forEach(callback => {
      callback();
    })
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data); // actual json data
      })
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${id}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data)
    }
  }
}