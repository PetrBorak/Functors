import { Functor, ApplicativeContainer } from "../../";

export declare class Map<T> {
  $value: T
  public insert: (k: string, v: any) => T & {k: any}
  public reduceWithKeys: (fn: (acc: any, value: any, key: string) => any, zero: any) => any
  public map: (fn: (v: T[keyof T]) => any) => Map<any>
  public traverse: (of: Functor<any>, fn: (x: T[keyof T]) => Functor<any>) => ApplicativeContainer<any>
}
