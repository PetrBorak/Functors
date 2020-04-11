import { expect } from 'chai'
import { safeProp } from './safeProp';


describe('helpers/poitnfree utilities/safeProp', () =>{
  it('import function', () => {
    return expect(typeof safeProp, 'is of type function').to.be.equal('function')
  })
})
