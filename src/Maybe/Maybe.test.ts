import { expect } from 'chai';
import { Maybe } from './index'

describe('helpers/Maybe', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof Maybe, 'function was imported').to.be.equal('function');
  });
});
