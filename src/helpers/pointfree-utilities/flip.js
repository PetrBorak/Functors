import { curry } from '../curry';

// flip :: (a -> b -> c) -> b -> a -> c
export const flip = curry((fn, a, b) => fn(b, a));
