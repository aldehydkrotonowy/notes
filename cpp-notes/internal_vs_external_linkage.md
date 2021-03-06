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