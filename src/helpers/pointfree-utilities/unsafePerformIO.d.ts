import { IO } from '../../../'

// unsafePerformIO :: IO a -> a
export declare function unsafePerformIO<T>(x: IO<T>): T
