import { IO } from '../../../'

// unsafePerformIO :: IO a -> a
export type unsagePerformIO<T> = (x: IO<T>) => T
