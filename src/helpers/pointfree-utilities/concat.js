import { curry } from '../curry';

// concat :: String -> String -> String
export const concat = curry((a, b) => a.concat(b));
