import { curry } from '../curry';

// replace :: RegExp -> String -> String -> String
export const replace = curry((re, rpl, str) => str.replace(re, rpl));
