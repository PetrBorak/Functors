import { curry } from '../curry';

// prop :: String -> Object -> a
export const prop = curry((p, obj) => obj[p]);
