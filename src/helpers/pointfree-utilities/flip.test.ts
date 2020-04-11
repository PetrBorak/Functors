import { flip } from './flip';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/flip', () =>{
  it('import function', () => {
    return expect(typeof flip, 'is of type function').to.be.equal('function')
  })
})
