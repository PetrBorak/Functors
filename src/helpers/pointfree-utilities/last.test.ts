import { last } from './last';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/last', () =>{
  it('import function', () => {
    return expect(typeof last, 'is of type function').to.be.equal('function')
  })
})
