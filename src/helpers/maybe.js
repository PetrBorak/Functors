import { curry } from './curry';

// maybe :: b -> (a -> b) -> Maybe a -> b
export const maybe = curry((v, f, m) => {
  if (m.isNothing) {
    return v;
  }
  
  return f(m.$value);
});
