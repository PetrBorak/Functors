import { intercalate } from './intercalate';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/intercalate', () =>{
  it('import function', () => {
    return expect(typeof intercalate, 'is of type function').to.be.equal('function')
  })
})
