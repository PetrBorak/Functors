import { Functor, ApplicativeContainer } from "../../";

export declare class List<T> {
  $value: T[]
  concat: (x: any[]) => List<any[]>
  static of: (x: any) => List<(typeof x)[]>
  public map: (fn: (x: T) => any) => List<any[]>
  public traverse: (of: Functor<T>, fn: (x: T) => Functor<any>) => ApplicativeContainer<any>
}
