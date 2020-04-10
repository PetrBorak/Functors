import { Identity, IO, Left, List, Map, Maybe, Right, Task, Traversable } from './types';

export type ApplicativeContainer<T> = Identity<T> & IO<any> & Left & List<T> & Map<T> & Maybe<T> & Right<T> & Task & Traversable
