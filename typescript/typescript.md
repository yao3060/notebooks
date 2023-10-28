# TypeScript


## Prettify
```typescript
type Prettify<T> = {
  [K in keyof T]: T[K]
} & {}

```

## Get Error Message

```typescript
const getErrorMessage = (error: unknown): string {

  if(error instanceof Error) {
     return error.message;
  }

  if(error && typeof error === 'object' && 'message' in error) {
    return String(error.message)
  }

  if(typeof error === 'string') {
    return error;
  }

  return 'Something went wrong'
}

```

## GetPromiseReturnType

```ts
type GetPromiseReturnType<T extends (...args: any) => any> = Awaitd<ReturnType<T>>
```
