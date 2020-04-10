import { curry } from '../curry';

// take :: Number -> [a] -> [a]
export const take = curry((n, xs) => xs.slice(0, n));
