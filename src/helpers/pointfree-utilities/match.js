import { curry } from '../curry';

// match :: RegExp -> String -> Boolean
export const match = curry((re, str) => re.test(str));
