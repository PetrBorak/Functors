import { map } from './map';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/map', () =>{
  it('import function', () => {
    return expect(typeof map, 'is of type function').to.be.equal('function')
  })
})
