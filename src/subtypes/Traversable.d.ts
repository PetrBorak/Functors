// The Traversable interface consists of two glorious functions: sequence and traverse.
import { ApplicativeContainer } from "../Applicative";

export declare class Traversable {
  sequence: (x: ApplicativeContainer<any>) => ApplicativeContainer<any>
  traverse: (x: ApplicativeContainer<any>) => ApplicativeContainer<any>
}

