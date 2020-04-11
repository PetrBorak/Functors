import { reduce } from './reduce';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/reduce', () =>{
  it('import function', () => {
    return expect(typeof reduce, 'is of type function').to.be.equal('function')
  })
})
