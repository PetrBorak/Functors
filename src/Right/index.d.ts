import { Functor } from "../subtypes/Functor"
import { ApplicativeContainer } from "../Applicative"

export declare class Right {
  constructor(x: any)
  private $value: any
  public isLeft: false
  public isRight: true
  public map(fn: (x: any) => any): Right
  public ap(f: Functor<any>): ApplicativeContainer<any>
  public chain(fn: (x: any) => any): any
  public join(): any
  public sequence(x: ApplicativeContainer<any>): Right
}
