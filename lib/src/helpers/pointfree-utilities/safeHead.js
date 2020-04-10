import { compose } from '../compose';
import { Maybe } from '../../Maybe';
import { head } from './head';

// safeHead :: [a] -> Maybe a
export const safeHead = compose(Maybe.of, head);
