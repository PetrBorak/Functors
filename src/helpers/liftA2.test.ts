import {assert} from "chai";
import {liftA2} from "./liftA2";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof liftA2 === 'function', 'function was imported');
  });
});
