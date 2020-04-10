import { curry } from '../curry';

// reduce :: (b -> a -> b) -> b -> [a] -> b
export const reduce = curry((fn, zero, xs) => xs.reduce(fn, zero));
