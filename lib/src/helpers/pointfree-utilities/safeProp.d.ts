import { Maybe } from '../../../'

// safeProp :: String -> Object -> Maybe a
export type safeProp = (x: string, obj: object) => Maybe<any>
