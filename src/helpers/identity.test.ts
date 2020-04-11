import {assert} from "chai";
import {identity} from "./identity";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof identity === 'function', 'function was imported');
  });
});
