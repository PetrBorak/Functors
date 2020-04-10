import { Right } from '../../';

export class Either {
  constructor(x) {
    this.$value = x;
  }
  
  // ----- Pointed (Either a)
  static of(x) {
    return new Right(x);
  }
}
