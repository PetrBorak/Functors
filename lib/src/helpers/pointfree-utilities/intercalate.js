import { curry } from '../curry';

// intercalate :: String -> [String] -> String
export const intercalate = curry((str, xs) => xs.join(str));
