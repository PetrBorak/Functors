import { Right } from '../../'

export declare class Either<T> {
  private $value: T
  static of(x: any): Right<typeof x>
}
