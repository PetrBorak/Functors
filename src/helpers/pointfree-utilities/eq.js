import { curry } from '../curry';

// eq :: Eq a => a -> a -> Boolean
export const eq = curry((a, b) => a === b);
