import { Left } from '../Left';

// left :: a -> Either a b
export const left = a => new Left(a);
