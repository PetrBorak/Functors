import { toUpperCase } from './toUpperCase';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/toUpperCase', () =>{
  it('import function', () => {
    return expect(typeof toUpperCase, 'is of type function').to.be.equal('function')
  })
})
