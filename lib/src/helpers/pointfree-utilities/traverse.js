import { curry } from '../curry';
// traverse :: (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
export const traverse = curry((of, fn, f) => f.traverse(of, fn));
