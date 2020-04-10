import { Functor, ApplicativeContainer } from "../../";

export type FirstToCompose<A> = (a: any) => A
export type SecondToCompose<A> = (a: any) => A

export type createCompose<A, B> = (F: FirstToCompose<A>) => (N: SecondToCompose<B>) => Compose<A>

export declare class Compose<T> {
  private $value: T

  //TODO - fiugre out the way to pass types from the closure to static property
  static of(x: any): Compose<any>
  public map: (fn: (x: any) => any) => Compose<T>
  public ap: (f: Functor) => ApplicativeContainer
}
