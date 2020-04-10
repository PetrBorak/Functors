import { Maybe} from '../../Maybe';
import { compose } from '../compose';
import { last } from './last';

// safeLast :: [a] -> Maybe a
export const safeLast = compose(Maybe.of, last);
