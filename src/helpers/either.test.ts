import {assert} from "chai";
import {either} from "./either";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof either === 'function', 'function was imported');
  });
});
