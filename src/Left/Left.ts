import { expect } from 'chai';
import { Left } from './index'

describe('helpers/Left', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof Left, 'function was imported').to.be.equal('function');
  });
});
