import { prop } from './prop';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/prop', () =>{
  it('import function', () => {
    return expect(typeof prop, 'is of type function').to.be.equal('function')
  })
})
