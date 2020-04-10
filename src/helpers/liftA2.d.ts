import { ApplicativeContainer } from '../../index';

export type liftA2 = (fn: (x: any) => any) => (a1: ApplicativeContainer<any>) => (a2: ApplicativeContainer<any>) => ApplicativeContainer<any>
