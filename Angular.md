### tutorials
- [Simple php backend](https://www.youtube.com/watch?v=sbDkHuY9p8w&list=PLjxbCynJ0Gd9SEi9RnXOPcaEIhITFtruB)
- [React & php backend](https://www.youtube.com/watch?v=BPGIrau9dW4)
- [Angular](https://www.youtube.com/watch?v=htPYk6QxacQ)

### project examples
- [RealWorld apps](https://github.com/gothinkster/realworld) - diffrent frontends and backends


### Store in angular 
- [stores in angular](https://blog.angular-university.io/angular-2-redux-ngrx-rxjs/)
- [Ngrx Store - An Architecture Guide](https://blog.angular-university.io/angular-ngrx-store-and-effects-crash-course/)
- [ngrx.io architecture](https://ngrx.io/guide/data/architecture-overview))

### nx start sequence
npx create-nx-workspace 					                        --> generate empty workspace
npm install -D @nrwl/angular 					                    --> install angular capabilities
npx nx g @nrwl/angular:application 				                --> questions
npx nx serve angular-testowy					                    --> odpalenie frontu
npm install -D @nrwl/express					                    --> install express
nx generate @nrwl/express:application <express-app-name> 	--> generate express app
npx nx test angular-testowy                               --> test angular-testowy app


npx nx g component todos --project=ui --export            --> Add a Component to ui lib
npx nx g @nrwl/angular:lib ui                             --> generate library of Angular components



libs
  shared
    ui-components
    ui-layout
    ui-theme
    utils
    core
    services
      service-base (basic post get put requests)
      service-higher-order (multiple basic service combined)
      
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
