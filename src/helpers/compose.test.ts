import {assert} from "chai";
import {compose} from "./compose";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof compose === 'function', 'function was imported');
  });
});
