import { Maybe } from '../../Maybe';
import { curry } from '../curry';
import { compose } from '../compose';
import { prop } from './prop';

// safeProp :: String -> Object -> Maybe a
export const safeProp = curry((p, obj) => compose(Maybe.of, prop(p))(obj));
