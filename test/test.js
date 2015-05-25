import {expect} from 'chai';

import Override from '../src';

describe('@Override', function() {
  let A;

  beforeEach(function() {
    class _A {
      a() {}
    }
    A = _A;
  });

  it('allows overriding from parent', function() {
    expect(function() {
      class B extends A {
        @Override
        a() {}
      }
    }).to.not.throw();
  });

  it('allows overriding from grandparent', function() {
    expect(function() {
      class B extends A {}

      class C extends B {
        @Override
        a() {}
      }
    }).to.not.throw();
  });

  it('throws on non-override', function() {
    expect(function() {
      class B extends A {
        @Override
        b() {}
      }
    }).to.throw(/does not override a member of its superclass/);
  });
});
