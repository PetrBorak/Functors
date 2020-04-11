import { eq } from './eq';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/eq', () =>{
  it('import function', () => {
    return expect(typeof eq, 'is of type function').to.be.equal('function')
  })
})
