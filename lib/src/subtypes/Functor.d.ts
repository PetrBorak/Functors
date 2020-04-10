//Functor is object, that implements map and obeys some laws

export declare class Functor<T> {
  public map: (fn: (x: any) => any) => Functor<any>
  private $value: T;
  static of: (x: any) => Functor<typeof x>
}
