import { expect } from 'chai'
import { sequence } from './sequence';


describe('helpers/poitnfree utilities/sequence', () =>{
  it('import function', () => {
    return expect(typeof sequence, 'is of type function').to.be.equal('function')
  })
})
