import { compose, identity, curry } from '../../';

export const rejectedCallback = (x) => (reject, resolve) => reject(x);

export class Task {
  constructor(fork) {
    this.fork = fork;
  }
  
  // [util.inspect.custom]() {
  //   return 'Task(?)';
  // }
  
  static rejected(x) {
    return new Task(rejectedCallback(x));
  }
  
  // ----- Pointed (Task a)
  static of(x) {
    return new Task((_, resolve) => resolve(x));
  }
  
  // ----- Functor (Task a)
  map(fn) {
    return new Task((reject, resolve) => this.fork(reject, compose(resolve, fn)));
  }
  
  // ----- Applicative (Task a)
  ap(f) {
    return this.chain(fn => f.map(fn));
  }
  
  // ----- Monad (Task a)
  chain(fn) {
    return new Task((reject, resolve) => this.fork(reject, x => fn(x).fork(reject, resolve)));
  }
  
  join() {
    return this.chain(identity);
  }
}
