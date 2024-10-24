import { MemoryCache } from './memory-cache.decorator';

describe('MemoryCache decorator', () => {
  class Dummy {
    public spy: ReturnType<typeof jest.fn> = jest.fn();

    @MemoryCache()
    public f(...args: unknown[]): void {
      this.spy(...args);
    }
  }

  let spy: ReturnType<typeof jest.fn>;
  let dummy: Dummy;

  beforeEach(() => {
    dummy = new Dummy();

    spy = dummy.spy;
  });

  it('should pass the first call', () => {
    dummy.f('hello world');

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith('hello world');
  });

  it('should not pass the second call if same argument', () => {
    dummy.f('hello world');
    dummy.f('hello world');

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should pass a call with a different argument', () => {
    dummy.f('hello world');
    dummy.f('hello world 2');

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenCalledWith('hello world 2');
  });

  it('should not pass a call with the same argument if interrupted', () => {
    dummy.f('hello world');
    dummy.f('hello world 2');
    dummy.f('hello world');

    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should pass a no-args call', () => {
    dummy.f();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should not pass the second no-args call', () => {
    dummy.f();
    dummy.f();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should keep this', () => {
    class OtherDummy {
      @MemoryCache()
      public f(): void {
        spy(this);
      }
    }

    const otherdummy = new OtherDummy();

    otherdummy.f();
    expect(spy).toHaveBeenCalledWith(otherdummy);
  });

  it('should pass the second argument', () => {
    dummy.f('hello', 'world');

    expect(spy).toHaveBeenCalledWith('hello', 'world');
  });

  it('should cache for each object separately', () => {
    class OtherDummy {
      @MemoryCache()
      public f(spyArg: ReturnType<typeof jest.fn>): void {
        spyArg();
      }
    }

    const dummy1 = new OtherDummy();
    const dummy2 = new OtherDummy();

    dummy1.f(spy);
    dummy2.f(spy);
    expect(spy).toHaveBeenCalledTimes(2);
  });

  it('should cache for each method separately', () => {
    class OtherDummy {
      @MemoryCache()
      public f(spyArg: ReturnType<typeof jest.fn>): void {
        spyArg();
      }

      @MemoryCache()
      public g(spyArg: ReturnType<typeof jest.fn>): void {
        spyArg();
      }
    }

    const otherdummy = new OtherDummy();

    otherdummy.f(spy);
    otherdummy.g(spy);
    expect(spy).toHaveBeenCalledTimes(2);
  });
});
