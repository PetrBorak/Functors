import { Functor, ApplicativeContainer } from '../../'

export declare class Identity<T> {
  private $value: T
  public of:(x: any) => Identity<typeof x>
  public map: (fn: (x: T) => any) => Identity<any>
  public ap: (f: Functor<any>) => ApplicativeContainer<any>
  public chain: (fn: (x: T) => any) => T
  sequence: (of: Functor) => Identity<T>
  traverse: (of: Functor, fn: (x: T) => ApplicativeContainer) => Identity<ApplicativeContainer>
  join: () => T
}
