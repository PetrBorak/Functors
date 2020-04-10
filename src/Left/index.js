export class Left {
  
  constructor(x) {
    this.$value = x;
  }
  
  get isLeft() {
    return true;
  }
  
  get isRight() {
    return false;
  }
  
  static of(x) {
    throw new Error('`of` called on class Left (value) instead of Either (type)');
  }
  
  // [util.inspect.custom]() {
  //   return `Left(${inspect(this.$value)})`;
  // }
  
  // ----- Functor (Either a)
  map() {
    return this;
  }
  
  // ----- Applicative (Either a)
  ap() {
    return this;
  }
  
  // ----- Monad (Either a)
  chain() {
    return this;
  }
  
  join() {
    return this;
  }
  
  // ----- Traversable (Either a)
  sequence(of) {
    return of(this);
  }
  
//eslint-disable-next-line
  traverse(of, fn) {
    return of(this);
  }
}
