import {assert} from "chai";
import {inspect} from "./inspect";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof inspect === 'function', 'function was imported');
  });
});
