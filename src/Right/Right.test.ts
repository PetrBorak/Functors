import { expect } from 'chai';
import { Right } from './index'

describe('helpers/Right', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof Right, 'function was imported').to.be.equal('function');
  });
});
