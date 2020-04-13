import chai, { expect } from 'chai';
import chaiSpies from 'chai-spies';

import { Task, rejectedCallback } from './index'
import { chain } from '../helpers/pointfree-utilities/chain'

before(() => {
  chai.use(chaiSpies);
});

describe('Task', function() {
  it('callable should be imported', function() {
    return expect(typeof Task, 'function was imported').to.be.equal('function');
  });

  it('resolve should be called in fork', function() {
    const spy = chai.spy()
    const task = new Task((reject: any, resolve: any) => {
      resolve()
    })
    task.fork(null, spy)
    expect(spy).to.have.been.called()
  });

  it('reject should be called in fork', function() {
    const spy = chai.spy()
    const task = new Task((reject: any, resolve: any) => {
      reject()
    })
    task.fork(spy, null)
    expect(spy).to.have.been.called()
  });

  it('resolve should be called in fork with value', function() {
    const valueToReturn = 'x'
    const spy = chai.spy()
    const task = new Task((reject: any, resolve: any) => {
      resolve(valueToReturn)
    })
    task.fork(null, spy)
    expect(spy).to.have.been.called.with(valueToReturn)
  });

  it('reject should be called in fork with value', function() {
    const valueToReturn = 'x'
    const spy = chai.spy()
    const task = new Task((reject: any, resolve: any) => {
      reject(valueToReturn)
    })
    task.fork(spy, null)
    expect(spy).to.have.been.called.with(valueToReturn)
  });

  it('resolve should be called in fork with value in async fork', function(done) {
    const valueToReturn = 'x'
    const task = new Task((reject: any, resolve: any) => {
      setTimeout(() => {
        resolve(valueToReturn);
      },0)
    })
    task.fork(null, (x: string) => {
      expect(x).to.equal(valueToReturn);
      done();
    })
  });

  it('reject should be called in fork with value in async fork', function(done) {
    const valueToReturn = 'x'
    const task = new Task((reject: any, resolve: any) => {
      setTimeout(() => {
        reject(valueToReturn);
      },0)
    })
    task.fork((x: string) => {
      expect(x).to.equal(valueToReturn);
      done();
    }, null)
  });

  it('rejected should return new Task', function() {
    const task = Task.rejected('x')
    expect(task,'rejected returned proper type').to.be.a('object')
  });

  it('rejectedCallback should never pick resolve parameter', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const callback = rejectedCallback('test');
    const resultCallback = callback(reject, resolve)
    expect(reject,'rejected returned proper type').to.have.been.called.with('test');
  });

  it('Task.rejected should allways pick the reject callback', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const RejectTask = Task.rejected('test');
    RejectTask.fork(reject, resolve)
    expect(reject,'rejected returned proper type').to.have.been.called.with('test');
  });

  it('Task.of should create Task', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const RejectTask = Task.of('x');
    expect(RejectTask,'Task of is static and create typeof Task').to.be.instanceOf(Task)
  });

  it('Task.of should create Task that resolves', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const ResolvedTask = Task.of('x');
    ResolvedTask.fork(reject, resolve);
    expect(resolve,'Task of is static and create typeof Task').to.have.been.called.with('x')
  });

  it('Task.fork with resolving callback should call the resolve callback', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const forkCallback = (reject: any, resolve: any) => resolve('x');
    const ResolvedTask = new Task(forkCallback);
    ResolvedTask.fork(reject, resolve);
    expect(resolve,'Task calls the resolve passed to the fork callback').to.have.been.called.with('x')
  });

  it('Task.fork with rejecting callback should call the reject callback', function() {
    const resolve = chai.spy();
    const reject = chai.spy();
    const forkCallback = (reject: any, resolve: any) => reject('x');
    const ResolvedTask = new Task(forkCallback);
    ResolvedTask.fork(reject, resolve);
    expect(reject,'Task calls the reject passed to the fork callback').to.have.been.called.with('x')
  });

  it('Task.map returns instance of Task', function() {
    const forkCallback = (reject: any, resolve: any) => 'x';
    const mapCallback = () => true;
    const ResolvedTask = new Task(forkCallback);
    const ResolvedTaskAfterMap = ResolvedTask.map(mapCallback)
    expect(ResolvedTaskAfterMap,'Task.map creates new instance of Task').to.have.a.instanceOf(Task)
  });

  it('Task.map calls passed resolve and calls the map function', function() {
    const resolve = chai.spy();
    const reject = () => true;
    const forkCallback = (reject: any, resolve: any) => resolve('x');
    const mapCallback = chai.spy();
    const ResolvedTask = new Task(forkCallback);
    const ResolvedTaskAfterMap = ResolvedTask.map(mapCallback);
    ResolvedTaskAfterMap.fork(reject, resolve)
    expect(mapCallback,'Task.map calls the map function').to.have.been.called()
  });

  it('Task.map creates Task that calls map with resolved value', function() {
    const resolve = chai.spy();
    const reject = () => true;
    const forkCallback = (reject: any, resolve: any) => resolve('x');
    const mapCallback = chai.spy();
    const ResolvedTask = new Task(forkCallback);
    const ResolvedTaskAfterMap = ResolvedTask.map(mapCallback);
    ResolvedTaskAfterMap.fork(reject, resolve)
    expect(mapCallback,'Task.map calls the map function').to.have.been.called.with('x')
  });

  it('Task.map creates Task that calls map propagates the result from map to the outer resolve function', function() {
    const resolve = chai.spy();
    const reject = () => true;
    const forkCallback = (reject: any, resolve: any) => resolve('x');
    const mapCallback = (x: any) => x;
    const ResolvedTask = new Task(forkCallback);
    const ResolvedTaskAfterMap = ResolvedTask.map(mapCallback);
    ResolvedTaskAfterMap.fork(reject, resolve)
    expect(resolve,'Task.map propagates the value after mapp').to.have.been.called.with('x')
  });

  it('Task.app returns new Task', function() {
    const resolve = () => true;
    const reject = () => true;
    const TaskToBeAppliedFrom = new Task((reject: any, resolve: any) => null)
    const TaskToBeAppliedTo = new Task((reject: any, resolve: any) => null)
    const TaskResultAfterAp = TaskToBeAppliedFrom.ap(TaskToBeAppliedTo)
    expect(TaskResultAfterAp,'Task.ap creates new instance of Task').to.be.an.instanceOf(Task)
  });

  it('Task.app returns new Task and calls the resolved value as a function', function() {
    const innerResolveCallable = chai.spy();
    const resolveOriginal = () => innerResolveCallable;
    const resolveFinal = () => 'x';
    const reject = () => true;
    const TaskToBeAppliedFrom = new Task((reject: any, resolve: any) => resolve(innerResolveCallable))
    const TaskToBeAppliedTo = new Task((reject: any, resolve: any) => resolve('x'))
    const TaskResultAfterAp = TaskToBeAppliedFrom.ap(TaskToBeAppliedTo)
    TaskResultAfterAp.fork(reject, resolveFinal)
    expect(innerResolveCallable,'resolved value from the original task called as a function').to.have.been.called()
  });

  it("Task.app - Task's final resolve function called", function() {
    const innerResolveCallable = chai.spy();
    const resolveOriginal = () => innerResolveCallable;
    const resolveFinal = chai.spy();
    const reject = () => true;
    const TaskToBeAppliedFrom = new Task((reject: any, resolve: any) => resolve(innerResolveCallable))
    const TaskToBeAppliedTo = new Task((reject: any, resolve: any) => resolve('x'))
    const TaskResultAfterAp = TaskToBeAppliedFrom.ap(TaskToBeAppliedTo)
    TaskResultAfterAp.fork(reject, resolveFinal)
    expect(resolveFinal,'resolved value from the original task called as a function').to.have.been.called()
  });

  it("Task.app - Final result has the specified shape", function() {
    const innerResolveCallable = chai.spy();
    const resolveFirst = 'resolveFirst,'
    const resolveSecond = (x: string) => x + 'resolveSecond,';
    const resolveThird = (x: string) => x + 'resolveThird';
    const expectedResult = "resolveFirst,resolveSecond,resolveThird"
    const reject = () => true;
    const TaskToBeAppliedFrom = new Task((reject: any, resolve: any) => resolve(resolveSecond))
    const TaskToBeAppliedTo = new Task((reject: any, resolve: any) => resolve(resolveFirst))
    const TaskResultAfterAp = TaskToBeAppliedFrom.ap(TaskToBeAppliedTo)
    const resultFinal = TaskResultAfterAp.fork(reject, resolveThird)
    expect(resultFinal,'final result have the expected shape').to.be.equal(expectedResult)
  });

  it("Task.app - chain returns new Task", function() {
    const originalTask = new Task((reject: any, resolve: any) => {
      resolve(true)
    })
    const taskWithAppliedFn = chain(()=> true)(originalTask);
    expect(taskWithAppliedFn).to.be.instanceOf(Task)
  });

  it("Task.app - chain returns Task that resolves transformed result", function() {
    const expectedResult = 'original transformed'
    let finalResult = ''
    const originalTask = new Task((reject: any, resolve: any) => {
      resolve('original ')
    })
    const transformFunction = (resolved: any) => new Task((reject: any, resolve: any) => resolve(resolved + 'transformed'))
    const taskWithAppliedFn = chain(transformFunction)(originalTask);
    const result = taskWithAppliedFn.fork(() => true, (final: string) => finalResult = final)
    expect(finalResult).to.be.equal(expectedResult)
  });

  it("Task.app - join returns Task", function() {
    const expected = new Task((x,y) => true);
    const original = new Task((x,y) => true);
    const final = original.join();
    expect(final).to.be.instanceOf(Task)
  });

  it("Task.app - join forks to value from inner Task", function() {
    let final = '';
    const expected = 'expected';
    const inner = new Task((reject: any,resolve: any) => resolve(expected));
    const original = new Task((reject: any,resolve: any) => resolve(inner));
    const resolve = (x: string) => final = x;
    original.join().fork(() => true, (x: any) => {
      final = x;
    });
    expect(final).to.equal(expected)
  });
});
