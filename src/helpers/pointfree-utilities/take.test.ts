import { take } from './take';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/take', () =>{
  it('import function', () => {
    return expect(typeof take, 'is of type function').to.be.equal('function')
  })
})
