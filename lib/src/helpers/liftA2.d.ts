import { ApplicativeContainer } from '../../index';

export declare function liftA2(fn: (x: any) => any): (a1: ApplicativeContainer<any>) => (a2: ApplicativeContainer<any>) => ApplicativeContainer<any>
