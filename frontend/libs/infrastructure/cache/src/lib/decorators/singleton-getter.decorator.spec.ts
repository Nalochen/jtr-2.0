import { identity } from 'rxjs';

import { SingletonGetter } from './singleton-getter.decorator';

describe('SingletonGetter decorator', () => {
  class Dummy {
    public spy = jest.fn();

    @SingletonGetter()
    public get f(): string {
      return this.spy();
    }
  }

  let spy: ReturnType<typeof jest.fn>;
  let dummy: Dummy;

  beforeEach(() => {
    dummy = new Dummy();

    spy = dummy.spy;
  });

  it('should be lazy', () => {
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should pass the first access', () => {
    spy.mockReturnValue('hello world');

    expect(dummy.f).toBe('hello world');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not pass the second access', () => {
    spy.mockReturnValue('hello world');

    expect(dummy.f).toBe('hello world');
    expect(dummy.f).toBe('hello world');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should keep this', () => {
    class OtherDummy {
      @SingletonGetter()
      public get f(): number {
        spy(this);
        return 420;
      }
    }

    const otherdummy = new OtherDummy();

    identity(otherdummy.f);
    expect(spy).toHaveBeenCalledWith(otherdummy);
  });

  it('should be specific to an instance', () => {
    class OtherDummy {
      @SingletonGetter()
      public get f(): number {
        spy();
        return 420;
      }
    }

    const dummy1 = new OtherDummy();
    const dummy2 = new OtherDummy();

    identity(dummy1.f);
    identity(dummy2.f);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should be specific to a property', () => {
    class OtherDummy {
      @SingletonGetter()
      public get f(): number {
        spy();
        return 420;
      }

      @SingletonGetter()
      public get g(): number {
        spy();
        return 420;
      }
    }

    const otherDummy = new OtherDummy();

    identity(otherDummy.f);
    identity(otherDummy.g);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
