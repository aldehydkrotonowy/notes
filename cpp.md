### CMake

- [CMake Tutorial For Beginners - Episode 1](https://www.youtube.com/watch?v=wl2Srog-j7I)
  - what is CMake and CDash
- [Introduction to CMake - Part 01](https://www.youtube.com/watch?v=wCvv8EVuPo0)
- [CMake Tutorials - 1. Getting Started](https://www.youtube.com/watch?v=IhOBTeqbz4w)
- [CMake Tutorials - 2. Add 3rd party library with find_package](https://www.youtube.com/watch?v=oBcDcVq1qnA)
- [How To install newest version of CMake on Linux](https://www.youtube.com/watch?v=_yFPO1ofyF0&list=PLK6MXr8gasrGmIiSuVQXpfFuE1uPT615s)
- [Makefile - tutorial](https://www.youtube.com/watch?v=GExnnTaBELk)

### Advanced

- [MISRA](https://www.misra.org.uk/MISRAHome/Whoarewe/tabid/67/Default.aspx)
- [C++ Weekly - Ep 1 ChaiScript_Parser Initialization Refactor](https://www.youtube.com/watch?v=EJtqHLvAIZE&list=PLs3KjaCtOwSZ2tbuV1hx8Xz-rFZTan2J1)
- [Boost C++ library](https://www.boost.org/doc/libs/1_65_0/libs/coroutine2/doc/html/coroutine2/overview.html)
- [Przydatne narzędzia przy sprawdzaniu i rozwijaniu kodu C/C++(i nie tylko)](https://github.com/qarmin/Instrukcje-i-Tutoriale/blob/master/AnalizatoryCC%2B%2B.md#przydatne-narz%C4%99dzia-przy-sprawdzaniu-i-rozwijaniu-kodu-cci-nie-tylko)
### Corutines 
- [YOUR FIRST COROUTINE - part 1](https://blog.panicsoftware.com/your-first-coroutine/);
- [COROUTINES INTRODUCTION - part 2](https://blog.panicsoftware.com/coroutines-introduction/)
- [Help understanding of the C++ Coroutines](https://github.com/luncliff/coroutine)
- [C++ links: Coroutines](https://gist.github.com/MattPD/9b55db49537a90545a90447392ad3aeb#file-cpp-std-coroutines-draft-md)

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
- [Google Test, Google's C++ test framework](https://github.com/google/googletest)
- [Quantum ](https://github.com/bloomberg/quantum) - C++ framework build on top of the Boost coroutine library


### Chromium code search
- [cs.chromium.org](https://cs.chromium.org/chromium/src/storage/browser/blob/blob_memory_controller.cc?q=CalculateBlobStorageLimitsImpl&sq=package:chromium&l=74)
- [blob_memory_controller.cc](https://source.chromium.org/chromium/chromium/src/+/master:storage/browser/blob/blob_memory_controller.cc;bpv=0?originalUrl=https:%2F%2Fcs.chromium.org%2F)

### links

- [Getting started with llvm](https://riptutorial.com/llvm)
- [What Is Static Analysis](https://www.perforce.com/blog/sca/what-static-analysis)
- [IBM Knowledge Center C++](https://www.ibm.com/support/knowledgecenter/SSLTBW_2.2.0/com.ibm.zos.v2r2.cbclx01/allocation_and_deallocation.htm)
- [C++ and Data Structures & Algorithms Cheat Sheet](https://github.com/gibsjose/cpp-cheat-sheet)
- [C++ Network Library](https://github.com/glynos/cpp-netlib)
- [Find a peak element](https://www.geeksforgeeks.org/find-a-peak-in-a-given-array/)
- [C++ Simple Programs And Examples](http://www.codebind.com/cpp/cpp-programs-examples/)
- [C++ Algorithms, Problems & Programming Examples](https://www.sanfoundry.com/1000-cpp-algorithms-problems-programming-examples/)
- [C++ kurs PL](https://www.fuw.edu.pl/~werner/pmn/CPP_HTML/CPP_files/PRG2CPP.html)
- [Elements of programming](http://elementsofprogramming.com/eop.pdf) :book:

### StackOverflow

- [How can I generate an ELF file with GCC?](https://stackoverflow.com/questions/21689261/how-can-i-generate-an-elf-file-with-gcc)
- [Makefiles, how can I use them?](https://stackoverflow.com/questions/20145132/makefiles-how-can-i-use-them)
- [Initialize once_flag?](https://stackoverflow.com/questions/19992661/initialize-once-flag)
- [What are coroutines in C++20?](https://stackoverflow.com/questions/43503656/what-are-coroutines-in-c20)
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()
- []()

### keywords

- pointers to fuctions
1. **cppcheck** generuje dużo śmieciowych warningów (przynajmniej gdy go używałem)
2. **valgrind8** zawsze prawdę ci powie i to narzędzie jest godne polecenia niemniej może być kłopotliwe w użyciu na niektórych platformach (np problem z offsetami na malince)
3. **scan-build** wiele przegapić może, choć ładne raporty generuje
4. **coverity** jest rzeczywiście dobre (piszę o komercyjnej wersji), każdy początkujący programista powinien przetrzepać swój projekt tym narzędziem a wiele przemyśleń może zyskać.

### C++

- [uarch-bench](https://github.com/travisdowns/uarch-bench) - A fine-grained micro-benchmark intended to investigate micro-architectural details of a target CPU, or to precisely benchmark small functions in a repeatable manner.
- [RE2, a regular expression library.](https://github.com/google/re2)

```c++
int *f(int a); //function f returning an int*
int (*g)(int a); //pointer g to a function returning an int
auto(*fp)()->int; //c++ 11
```

### [Internal Linkage and External Linkage in C ](https://www.geeksforgeeks.org/internal-linkage-external-linkage-c/)

It is often quite hard to distinguish between scope and linkage, and the roles they play. This article focuses on scope and linkage, and how they are used in C language.

### - Definitions

- **Scope** : Scope of an identifier is the part of the program where the identifier may directly be accessible. In C, all identifiers are lexically (or statically) scoped.

- **Linkage** : Linkage describes how names can or can not refer to the same entity throughout the whole program or one single translation unit.
  The above sounds similar to Scope, but it is not so. To understand what the above means, let us dig deeper into the compilation process.

- **Translation Unit** : A translation unit is a file containing source code, header files and other dependencies. All of these sources are grouped together in a file for they are used to produce one single executable object. It is important to link the sources together in a meaningful way. For example, the compiler should know that printf definition lies in stdio header file.

In C and C++, a program that consists of multiple source code files is compiled one at a time. Until the compilation process, a variable can be described by it’s scope. It is only when the linking process starts, that linkage property comes into play. Thus, scope is a property handled by compiler, whereas linkage is a property handled by linker.

The Linker links the resources together in the linking stage of compilation process. The Linker is a program that takes multiple machine code files as input, and produces an executable object code. It resolves symbols (i.e, fetches definition of symbols such as “+” etc..) and arranges objects in address space.

Linkage is a property that describes how variables should be linked by the linker. Should a variable be available for another file to use? Should a variable be used only in the file declared? Both are decided by linkage.
Linkage thus allows you to couple names together on a per file basis, scope determines visibility of those names.

There are 2 types of linkage:

1. Internal Linkage: An identifier implementing internal linkage is not accessible outside the translation unit it is declared in. Any identifier within the unit can access an identifier having internal linkage. It is implemented by the keyword static. An internally linked identifier is stored in initialized or uninitialized segment of RAM. (note: static also has a meaning in reference to scope, but that is not discussed here).

#### Animal.cpp

```cpp

// C code to illustrate Internal Linkage
#include <stdio.h>

static int animals = 8;
const int i = 5;

int call_me(void)
{
    printf("%d %d", i, animals);
}
```

The above code implements static linkage on identifier animals. Consider Feed.cpp is located in the same translation unit.

#### Feed.cpp

```cpp

// C code to illustrate Internal Linkage
#include <stdio.h>

int main()
{
    call_me();
    animals = 2;
    printf("%d", animals);
    return 0;
}
```

On compiling Animals.cpp first and then Feed.cpp, we get
Output : 5 8 2

Now, consider that Feed.cpp is located in a different translation unit. It will compile and run as above only if we use #include "Animals.cpp".
Consider Wash.cpp located in a 3rd translation unit.

```cpp

// C code to illustrate Internal Linkage
#include <stdio.h>
#include "animal.cpp" // note that animal is included.

int main()
{
    call_me();
    printf("\n having fun washing!");
    animals = 10;
    printf("%d\n", animals);
    return 0;
}
```

There are 3 translation units (Animals, Feed, Wash) which are using animals code.
This leads us to conclude that each translation unit accesses it’s own copy of animals. That is why we have animals = 8 for Animals.cpp, animals = 2 for Feed.cpp and animals = 10 for Wash.cpp. A file. This behavior eats up memory and decreases performance.

Another property of internal linkage is that it is only implemented when the variable has global scope, and all constants are by default internally linked.

Usage : As we know, an internally linked variable is passed by copy. Thus, if a header file has a function fun1() and the source code in which it is included in also has fun1() but with a different definition, then the 2 functions will not clash with each other. Thus, we commonly use internal linkage to hide translation-unit-local helper functions from the global scope. For example, we might include a header file that contains a method to read input from the user, in a file that may describe another method to read input from the user. Both of these functions are independent of each other when linked.
External Linkage: An identifier implementing external linkage is visible to every translation unit. Externally linked identifiers are shared between translation units and are considered to be located at the outermost level of the program. In practice, this means that you must define an identifier in a place which is visible to all, such that it has only one visible definition. It is the default linkage for globally scoped variables and functions. Thus, all instances of a particular identifier with external linkage refer to the same identifier in the program. The keyword extern implements external linkage.

When we use the keyword extern, we tell the linker to look for the definition elsewhere. Thus, the declaration of an externally linked identifier does not take up any space. Extern identifiers are generally stored in initialized/uninitialized or text segment of RAM.


### Others
MSYS2
Krótki opis instalacji (w razie wątpliwości lub problemów skonsultuj się z manualem powyżej):

- Zainstaluj MSYS2 do katalogu w ścieżce bez spacji (WAŻNE, bo inaczej będziesz miał problemy na każdym kroku)
- Uruchom msys2_shell.bat
- Zaktualizuj bazę pakietów pacman -Sy
- Zaktualizuj główne pakiety pacman -S --needed filesystem msys2-runtime bash libreadline libiconv libarchive libgpgme libcurl pacman ncurses libintl
- Zamknij okno konsoli.
- Uruchom autorebase.bat.
- Uruchom ponownie msys2_shell.bat
- Zaktualizuj resztę pakietów pacman -Su
- Gotowe! Masz podstawowe środowisko MSYS2. Teraz możesz instalować pozostałe pakiety.

instalacja pakietów: *pacman -S nazwa-pakietu*, Szukanie pakietów: *pacman -Ss nazwa-pakietu*, Usuwanie pakietów: *pacman -R nazwa-pakietu*, Aktualizacja pakietow: *pacman -Su*, Aktualizacja bazy pakietów: *pacman -Sy*