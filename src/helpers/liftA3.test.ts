import {assert} from "chai";
import {liftA3} from "./liftA3";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof liftA3 === 'function', 'function was imported');
  });
});
