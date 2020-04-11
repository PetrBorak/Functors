import { replace } from './replace';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/replace', () =>{
  it('import function', () => {
    return expect(typeof replace, 'is of type function').to.be.equal('function')
  })
})
