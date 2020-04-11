import {assert} from "chai";
import {reject} from "./reject";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof reject === 'function', 'function was imported');
  });
});
