import { toString } from './toString';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/toString', () =>{
  it('import function String', () => {
    return expect(typeof toString, 'is of type function').to.be.equal('function')
  })
})
