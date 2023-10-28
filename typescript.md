# TypeScript


## Prettify
```typescript
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

```
