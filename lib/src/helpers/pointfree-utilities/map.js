import { curry } from '../curry';

// map :: Functor f => (a -> b) -> f a -> f b
export const map = curry((fn, f) => f.map(fn));
