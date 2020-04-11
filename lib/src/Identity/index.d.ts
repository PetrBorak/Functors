import { Functor, ApplicativeContainer } from '../../'

export declare class Identity<T> {
  constructor(x: T)
  private $value: T
  public of:(x: any) => Identity<typeof x>
  public map: (fn: (x: T) => any) => Identity<any>
  public ap: (f: Functor<any>) => ApplicativeContainer<any>
  public chain: (fn: (x: T) => any) => T
  sequence: (of: any) => Identity<T>
  traverse: (of: any, fn: (x: T) => ApplicativeContainer<T>) => Identity<T>
  join: () => T
}
