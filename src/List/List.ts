import { expect } from 'chai';
import { List } from './index'

describe('helpers/List', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof List, 'function was imported').to.be.equal('function');
  });
});
