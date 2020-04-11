import { Functor, ApplicativeContainer } from "../../";

export type FirstToCompose<A> = (a: any) => A
export type SecondToCompose<A> = (a: any) => A

export declare const createCompose: (...args: any[]) => any;

export declare class Compose {
  constructor(x: any);
  private $value: any

  //TODO - fiugre out the way to pass types from the closure to static property
  static of(x: any): Compose
  public map: (fn: (x: any) => any) => Compose
  public ap: (f: Functor<any>) => ApplicativeContainer<any>
}
