### CMake

- [CMake Tutorial For Beginners - Episode 1](https://www.youtube.com/watch?v=wl2Srog-j7I)
  - what is CMake and CDash
- [How To install newest version of CMake on Linux](https://www.youtube.com/watch?v=_yFPO1ofyF0&list=PLK6MXr8gasrGmIiSuVQXpfFuE1uPT615s)

### Advanced

- [C++ Weekly - Ep 1 ChaiScript_Parser Initialization Refactor](https://www.youtube.com/watch?v=EJtqHLvAIZE&list=PLs3KjaCtOwSZ2tbuV1hx8Xz-rFZTan2J1)

### CPP projects

- [50+ C/C++ Projects with Source Code](https://www.codewithc.com/c-projects-with-source-code/)

lesson 1

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

### C++ 20

- [07.2019 Cologne Report](https://botondballo.wordpress.com/2019/07/26/trip-report-c-standards-meeting-in-cologne-july-2019/)
- [02.2019 Kona Report](https://botondballo.wordpress.com/2019/03/20/trip-report-c-standards-meeting-in-kona-february-2019/)

* char8_t – is not an alias to other data types.
* constexpr
  - try...catch can be written as constexpr
  - dynamic_cast and typied can be called in constexpr
  - std::is_constant_evaluated() - returns true if the function is currently calculated at the compilation stage
* std :: bind_front
* std :: assume_aligned
* Ranges
* Coroutines
