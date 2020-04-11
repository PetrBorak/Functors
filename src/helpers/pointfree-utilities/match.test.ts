import { match } from './match';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/match', () =>{
  it('import function', () => {
    return expect(typeof match, 'is of type function').to.be.equal('function')
  })
})
