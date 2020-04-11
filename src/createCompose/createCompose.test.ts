import { expect } from 'chai';
import { createCompose } from './index'

describe('helpers/createCompose', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof createCompose, 'function was imported').to.be.equal('function');
  });
});
