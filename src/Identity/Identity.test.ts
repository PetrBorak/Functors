import { expect } from 'chai';
import { Identity } from './index'

describe('helpers/Identity', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof Identity, 'function was imported').to.be.equal('function');
  });
});
