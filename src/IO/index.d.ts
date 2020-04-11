import {Functor} from "../subtypes";
import {ApplicativeContainer} from "../Applicative";

export declare class IO<T> {
  public unsafePerformIO: (...any) => T;
  public of:(x: any) => IO<typeof x>
  public map: (fn: (x: T) => any) => IO<any>
  public ap: (f: Functor<any>) => ApplicativeContainer<any>
  public chain: (fn: (x: T) => any) => T
  join: () => T
}
