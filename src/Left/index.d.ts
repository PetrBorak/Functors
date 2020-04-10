import { Functor, ApplicativeContainer } from '../../'

export declare class Left {
  public isLeft: true
  public isRight: false
  public of: (...any) => never
  public map: (...any) => this
  public ap: (...any) => this
  public chain: (...any) => this
  public join: (...any) => this
  public sequence: (of: Functor) => ApplicativeContainer<Left>
  public traverse: (of: Functor) => ApplicativeContainer<Left>
}
