/**
 * Caches a getter call by replacing the property on first call
 */
export function SingletonGetter(): MethodDecorator {
  function decorator<T>(
    target: object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>
  ): TypedPropertyDescriptor<T> {
    if (!descriptor.get) {
      return descriptor;
    }

    const method: () => T = descriptor.get;

    const decorated: () => T = function (this: unknown): T {
      const value: T = method.apply(this);

      Object.defineProperty(this, propertyKey, { value });

      return value;
    };

    return { ...descriptor, get: decorated };
  }

  return decorator;
}
