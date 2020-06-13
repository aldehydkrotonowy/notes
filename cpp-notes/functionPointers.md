#### function pointers

declaration

```c++
int (*fcnPtr)();
int (*const fcnPtr)();
```

assigning functin to function pointer

```c++
int foo();
double goo();
int hoo(int x);

int (*fcnPtr1)(){ foo };
double (*fcnPtr4)(){ goo };
int (*fcnPtr3)(int){ hoo };

//calls
(*fcnPtr)(5); //explicit dereference
fcnPtr(5); //implicite dereference

```


```c++
int *f(int a); //function f returning an int*
int (*g)(int a); //pointer g to a function returning an int
auto(*fp)()->int; //c++ 11
```