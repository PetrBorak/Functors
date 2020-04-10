import { Task } from '../Task';

// reject :: a -> Task a b
export const reject = a => Task.rejected(a);
