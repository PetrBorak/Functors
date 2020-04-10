import { flip } from './flip';
import { concat } from './concat';

// append :: String -> String -> String
export const append = flip(concat);
