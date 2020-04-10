import { ApplicativeContainer } from '../../index';

export type maybe = (x: any) => (y: any) => (z: ApplicativeContainer<any>) => any
