import { expect } from 'chai';
import { IO } from './index'

describe('IO', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof IO, 'function was imported').to.be.equal('function');
  });
});
