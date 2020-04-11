import { unsafePerformIO } from './unsafePerformIO';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/unsafePerformIO', () =>{
  it('import function', () => {
    return expect(typeof unsafePerformIO, 'is of type function').to.be.equal('function')
  })
})
