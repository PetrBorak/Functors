import {Functor} from "../subtypes";
import {ApplicativeContainer} from "../Applicative";

export declare class IO<T> {
  constructor(fn: (x: any) => T)
  public unsafePerformIO: (...x: any[]) => T;
  public of:(x: any) => IO<typeof x>
  public map: (fn: (x: T) => any) => IO<any>
  public ap: (f: Functor<any>) => ApplicativeContainer<any>
  public chain: (fn: (x: T) => any) => T
  join: () => T
}
