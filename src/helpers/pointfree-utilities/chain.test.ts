import { chain } from './chain';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/chain', () =>{
  it('import function', () => {
    return expect(typeof chain, 'is of type function').to.be.equal('function')
  })
})
