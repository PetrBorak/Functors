import { reverse } from './reverse';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/reverse', () =>{
  it('import function', () => {
    return expect(typeof reverse, 'is of type function').to.be.equal('function')
  })
})
