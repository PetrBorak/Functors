import { join } from './join';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/join', () =>{
  it('import function', () => {
    return expect(typeof join, 'is of type function').to.be.equal('function')
  })
})
