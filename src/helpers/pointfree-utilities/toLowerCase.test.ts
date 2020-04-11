import { toLowerCase } from './toLowerCase';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/toLowerCase', () =>{
  it('import function', () => {
    return expect(typeof toLowerCase, 'is of type function').to.be.equal('function')
  })
})
