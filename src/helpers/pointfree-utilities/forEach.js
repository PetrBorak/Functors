import { curry } from '../curry';

// forEach :: (a -> ()) -> [a] -> ()
export const forEach = curry((fn, xs) => xs.forEach(fn));
