const memoryCacheStore = Symbol('');

/**
 * Caches a pure method call
 *
 * Currently, it only matches the first argument, if we need more, this must be extended
 */
export function MemoryCache(): MethodDecorator {
  function decorator<T>(
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> {
    const method = descriptor.value;

    if (!(method instanceof Function)) {
      return descriptor;
    }

    const decorated: T = function (
      this: { [memoryCacheStore]: Map<string, Map<unknown, unknown>> },
      ...args: unknown[]
    ): unknown {
      const key = args[0];

      if (!Object.prototype.hasOwnProperty.call(this, memoryCacheStore)) {
        this[memoryCacheStore] = new Map<string, Map<unknown, unknown>>();
      }

      const store: Map<string | symbol, Map<unknown, unknown>> = this[
        memoryCacheStore
      ];

      let cache: Map<unknown, unknown> | undefined = store.get(propertyKey);
      if (cache === undefined) {
        cache = new Map<unknown, unknown>();
        store.set(propertyKey, cache);
      }

      if (cache.has(key)) {
        return cache.get(key);
      }

      const value: unknown = method.apply(this, args);

      cache.set(key, value);

      return value;
    } as unknown as T;

    return { ...descriptor, value: decorated };
  }

  return decorator;
}
