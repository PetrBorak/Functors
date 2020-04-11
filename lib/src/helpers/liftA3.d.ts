import { ApplicativeContainer } from '../../index'

export declare function liftA3(fn: (x: any) => any): (a1: ApplicativeContainer<any>) => (a2: ApplicativeContainer<any>) => (a3: ApplicativeContainer<any>) => ApplicativeContainer<any>
