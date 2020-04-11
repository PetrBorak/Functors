import { safeHead } from './safeHead';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/safeHead', () =>{
  it('import function', () => {
    return expect(typeof safeHead, 'is of type function').to.be.equal('function')
  })
})
