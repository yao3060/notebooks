# TypeScript


## Prettify
```typescript
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

```

## Get Error Message

```ts
const getErrorMessage = (error: unknown): string {

  if(error instanceof Error) return error.message;

  if(error && typeof error === 'object' && 'message' in error) return String(error.message)

  if(typeof error === 'string') return error

  return 'Something went wrong'
}

```
