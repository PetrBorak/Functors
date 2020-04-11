import { ApplicativeContainer, Functor } from "../../";

export declare class Maybe<T> {
  constructor(x: T)
  private $value: T
  public isNothing: boolean
  public isJust: boolean
  public of: (x: any) => Maybe<typeof x>
  public map: (fn: (x: T) => any) => Maybe<any>
  public ap: (f: Functor<any>) => Maybe<T> & ApplicativeContainer<any>
  public chain: (fn: (x: T) => any) => any
  public join: () => this & T
  public sequence: (of: ApplicativeContainer<any>) => ApplicativeContainer<this> & T
  public traverse: (of: Functor<this>, fn: (x: T) => ApplicativeContainer<any> | any[]) => ApplicativeContainer<this> & Maybe<ApplicativeContainer<any> | Maybe<any>[]>
}
