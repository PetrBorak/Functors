import { curry } from '../curry';

// sortBy :: Ord b => (a -> b) -> [a] -> [a]
export const sortBy = curry((fn, xs) => xs.sort((a, b) => {
  if (fn(a) === fn(b)) {
    return 0;
  }
  
  return fn(a) > fn(b) ? 1 : -1;
}));
