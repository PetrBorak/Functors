import { forEach } from './forEach';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/forEach', () =>{
  it('import function', () => {
    return expect(typeof forEach, 'is of type function').to.be.equal('function')
  })
})
