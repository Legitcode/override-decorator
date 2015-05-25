# override-decorator
Simple `@Override` decorator for ES7.

## Usage
Enable stage 0 or `es7.decorators` in Babel, then mark properties that are intended to override superclass properties with `@Override`.

```js
class A {
  a() {
    /* ... */
  }
}

class B extends A {
  @Override
  a() {
    /* ... */
  }
}
```

The decorator will throw an error if the decorated property does not override a parent property.

```js
class C extends A {
  @Override
  b() {
    /* ... */
  }
}

// Error: b does not override a member of its superclass
```
