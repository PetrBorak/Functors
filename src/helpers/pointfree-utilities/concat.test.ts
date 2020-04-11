import { concat } from './concat';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/concat', () =>{
  it('import function', () => {
    return expect(typeof concat, 'is of type function').to.be.equal('function')
  })
})
