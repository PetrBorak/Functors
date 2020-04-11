import { assert, expect } from 'chai';
import { always } from './always'

describe('helpers/alwdayss', function() {
  it('callabsle shsould be imported', function() {
    return expect(typeof always, 'function was imported').to.be.equal('function');
  });
});
