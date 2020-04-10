import { curry } from '../curry';
 // split :: String -> String -> [String]

export const split = curry((sep, str) => str.split(sep));
