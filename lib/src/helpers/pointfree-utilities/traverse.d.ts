import { ApplicativeContainer, Traversable } from "../../../";

// traverse :: (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
export type traverse = (fna: (a: any) => ApplicativeContainer<any>) => (fnb: (b: any) => ApplicativeContainer<any>) => (c: Traversable) => ApplicativeContainer<ApplicativeContainer<any>>
