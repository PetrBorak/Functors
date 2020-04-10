import { curry } from '../curry';

// sequence :: (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
export const sequence = curry((of, f) => f.sequence(of));
