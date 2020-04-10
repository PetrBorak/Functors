import { Traversable, ApplicativeContainer } from "../../../";

export type sequence = (of: Traversable, fn: (x: any) => ApplicativeContainer<any>) => ApplicativeContainer<any>
