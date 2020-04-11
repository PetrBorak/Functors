import {assert} from "chai";
import {left} from "./left";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof left === 'function', 'function was imported');
  });
});
