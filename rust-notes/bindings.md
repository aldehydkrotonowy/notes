### 


- [What is the effect of extern “C” in C++?](https://stackoverflow.com/questions/1041866/what-is-the-effect-of-extern-c-in-c)
	extern "C" makes a function-name in C++ have 'C' linkage (compiler does not mangle the name) so that client C code can link to (i.e use) your function using a 'C' compatible header file that contains just the declaration of your function. Your function definition is contained in a binary format (that was compiled by your C++ compiler) that the client 'C' linker will then link to using the 'C' name.

	Since C++ has overloading of function names and C does not, the C++ compiler cannot just use the function name as a unique id to link to, so it mangles the name by adding information about the arguments. A C compiler does not need to mangle the name since you can not overload function names in C. When you state that a function has extern "C" linkage in C++, the C++ compiler does not add argument/parameter type information to the name used for linkage.


	
- [Foreign Function Interface](https://inko-lang.org/news/the-challenge-of-building-a-foreign-function-interface/)

	In Inko 0.3.0 we introduced a Foreign Function Interface for interfacing with C. In this article we'll take a look at the challenges faced when building a Foreign Function Interface.

	A Foreign Function Interface (FFI) is a mechanism for one programming language to make use of another programming language, usually C. Most programming languages out there offer such an interface, such as (but not limited to): Python, Ruby, **Rust**, Lua, and Inko itself. Such an interface is necessary as there is a lot of software written in C, and rewriting all that in a different programming language is not doable.

	To provide an FFI, most programming languages will use one (or sometimes both) of the following approaches:

	- By allowing developers to write extensions in C, which are then loaded into the program.
	- By using **libffi**: a software library that allows you to call C functions, using information defined at run time instead of at compile time.

	Both of these approaches have their benefits and drawbacks. C extensions usually have little overhead, though this may vary between programming languages. A drawback of this approach is that you'll have to write your code in C, which isn't exactly the easiest language to deal with.

	Using **libffi** means you can write all your code in the target language, such as Ruby. This comes at the cost of overhead, as some extra work might be necessary to convert types and execute function calls. For example, a Ruby integer has to be converted to an unsigned int in C, including some validation to make sure the integer would not overflow. A Just-in-time (JIT) compiler might be able to optimise this away, but at its core the use of **libffi** does introduce some overhead.

	##### Type conversion and validation
	Regardless of what approach for an FFI we take, we may need to convert some types of our host language (e.g. Ruby) to types in the target language (e.g. C). The most straightforward example would be the conversion of integral types. In a language that has different types for integers of different sizes, such as most compiled languages, this is less of an issue.

	For a language with only a single (often arbitrary precision) integer type (such as Ruby and Python) things will get more tricky. In such a language you can not pass your integer to C, as its value may not be compatible with the expected type. For example, passing the number 300 to a C char is likely to break the program. This means some form of runtime validation and conversion might be necessary. You could decide to not validate the value and instead cast it to the target type, requiring developers to make sure they are passing the right value.

	For more complex types such as structures or strings, things may get more tricky. For example, in C a string is a sequence of bytes that ends with a NULL byte, but in many languages it's a more complex type. In **Rust** the String type is a structure consisting out of at least two fields:

	- A pointer to the bytes of the string, without a NULL byte.
	- A single word (usize in **Rust**) that stores the number of bytes in the string.

	Such complex types can not be converted to a C char*, nor can we pass the pointer to the string as it is not NULL terminated. **Rust's** approach to this problem is to provide separate types for C strings: CStr and CString. It is then up to the programmer to somehow construct these types, which may require copying the memory of the source string so the NULL byte can be added to it.

- [Foregin Function Interface in RUST](https://doc.rust-lang.org/1.9.0/book/ffi.html)



	How function are stored in object files created by C compilator
- [Object Files and Symbols](http://nickdesaulniers.github.io/blog/2016/08/13/object-files-and-symbols/)

- [Name mangling](https://en.wikipedia.org/wiki/Name_mangling)