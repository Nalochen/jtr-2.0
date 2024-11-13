# Cache

Contains some decorators to automatically cache values.

Example:

```typescript
class Foo {
  @SingletonGetter()
  public get foo$(): Observable<number> {
    // Here omitted: Heavy computation that always has the same result
    return of(0);
  }
}
```
