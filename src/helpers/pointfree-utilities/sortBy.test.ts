import { sortBy } from './sortBy';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/sortBy', () =>{
  it('import function', () => {
    return expect(typeof sortBy, 'is of type function').to.be.equal('function')
  })
})
