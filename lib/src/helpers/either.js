import { curry } from './curry';

// either :: (a -> c) -> (b -> c) -> Either a b -> c
export const either = curry((f, g, e) => {
  if (e.isLeft) {
    return f(e.$value);
  }
  
  return g(e.$value);
});
