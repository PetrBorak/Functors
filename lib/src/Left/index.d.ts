import { Functor, ApplicativeContainer } from '../../'

export declare class Left {
  constructor(...x: any[]);
  public isLeft: true
  public isRight: false
  public of: (...x: any[]) => never
  public map: (...x: any[]) => this
  public ap: (...x: any[]) => this
  public chain: (...x: any[]) => this
  public join: (...x: any[]) => this
  public sequence: (of: any) => ApplicativeContainer<Left>
  public traverse: (of: any) => ApplicativeContainer<Left>
}
