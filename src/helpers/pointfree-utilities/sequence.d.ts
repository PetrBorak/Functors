import { Traversable, ApplicativeContainer } from "../../../";

export declare function sequence(of: Traversable, fn: (x: any) => ApplicativeContainer<any>): ApplicativeContainer<any>
