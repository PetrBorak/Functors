import {assert} from "chai";
import {curry} from "./curry";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof curry === 'function', 'function was imported');
  });
});
