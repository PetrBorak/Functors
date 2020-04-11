import { filter } from './filter';
import { expect } from 'chai'

describe('helpers/poitnfree utilities/filetr', () =>{
  it('import function', () => {
    return expect(typeof filter, 'is of type function').to.be.equal('function')
  })
})
