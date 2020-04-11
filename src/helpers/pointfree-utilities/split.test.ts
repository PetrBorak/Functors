import { split } from './split';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/split', () =>{
  it('import function', () => {
    return expect(typeof split, 'is of type function').to.be.equal('function')
  })
})
