import { expect } from 'chai'
import { safeLast } from './safeLast';


describe('helpers/poitnfree utilities/safeLast', () =>{
  it('import function', () => {
    return expect(typeof safeLast, 'is of type function').to.be.equal('function')
  })
})
