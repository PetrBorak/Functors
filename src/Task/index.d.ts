export declare class Task {
  constructor(fork: (a: (x: any) => any, b: (y: any) => any) => any)
  static of(x: any): Task
  static rejected(x: any): Task
  public fork(x: any, y: any): any
  public map(fn: (x: any) => any): Task
  public ap(f: Task): Task
  public chain(fn: (x: any) => Task): Task
  public join(): Task
}

export declare const rejectedCallback: (x: any)  => (reject: (a: any) => any, resolve: (b: any) => any) => any
