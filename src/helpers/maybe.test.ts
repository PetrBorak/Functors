import {assert} from "chai";
import {maybe} from "./maybe";

describe('helpers/always', function() {
  it('callable should be imported', function() {
    assert(typeof maybe === 'function', 'function was imported');
  });
});
