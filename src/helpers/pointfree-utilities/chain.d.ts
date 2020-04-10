import { Task } from '../../../'

export type chain  = (m: Task, fn: (x: any) => any) => Task
