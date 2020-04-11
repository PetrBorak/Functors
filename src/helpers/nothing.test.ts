import {assert} from "chai";
import {nothing} from "./nothing";

describe('helpers/always', function() {
  it('object should be imported', function() {
    assert(typeof nothing === 'object', 'object was imported');
  });
});
