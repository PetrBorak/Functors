import { add } from './add';
import { assert } from 'chai'

describe('helpers/poitnfree utilities/add', () =>{
  it('import function', () => {
    return assert(typeof add === 'function', 'is of type function')
  })
})
