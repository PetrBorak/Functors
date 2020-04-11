import { Right } from '../../'

export declare class Either<T> {
  constructor(x: T)
  private $value: T
  static of(x: any): Right
}
