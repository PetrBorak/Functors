import { head } from './head';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/head', () =>{
  it('import function', () => {
    return expect(typeof head, 'is of type function').to.be.equal('function')
  })
})
