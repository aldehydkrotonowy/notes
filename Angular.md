### tutorials
- [Simple php backend](https://www.youtube.com/watch?v=sbDkHuY9p8w&list=PLjxbCynJ0Gd9SEi9RnXOPcaEIhITFtruB)
- [React & php backend](https://www.youtube.com/watch?v=BPGIrau9dW4)
- [Angular](https://www.youtube.com/watch?v=htPYk6QxacQ)

### project examples
- [RealWorld apps](https://github.com/gothinkster/realworld) - diffrent frontends and backends


Snippets - utils - pooling
```typescript
const POOLING_CONDITIONS_NOT_MET_ERROR: string = "Pooling conditions not met error";
export function poll<T>(
    request: Obsrvable<T>,
    endCondition: (response: T) => boolean,
    maxNumberOfTries: number = 5,
    delayTime: number = 2000
): Observable<T>{
    let tries: number = 0;
    return request.pipe(
        map((response: T) => {
            tries++;
            if(tries===maxNuberOfTries || endCondition(response)){
                return response;
            }
            throw Error(POOLING_CONDITIONS_NOT_MET_ERROR);
        }),
        retryWhen((errors: Observable<Array>) => {
            return errors.pipe(
                tap((error) =>{
                    if(error.message !== POOLING_CONDITIONS_NOT_MET_ERROR) throw error
                }),
                delay(delayTime)
            )
        })
    )
}
```