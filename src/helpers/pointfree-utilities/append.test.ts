import { append } from './append';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/append', () =>{
  it('import function', () => {
    return expect(typeof append, 'is of type function').to.be.equal('function')
  })
})
