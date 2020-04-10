import { ApplicativeContainer } from '../../../'

export type map = (fn:(x:any) => any) => (f: ApplicativeContainer<any>) => ApplicativeContainer<any>
