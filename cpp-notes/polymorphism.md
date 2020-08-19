- [Polymorphism - Stack Overflow](https://stackoverflow.com/questions/2032361/whats-polymorphic-type-in-c)

- Polymorphism in C++, in a nutshell, is using objects through a **separately-defined interface.**
- **dynamic_cast** has the additional requirement that **at least** one of the involved types has a **virtual method**.

polymorphism example:
```c++
struct Animal {
  virtual ~Animal() {}
  virtual void speak() = 0;
};

struct Cat : Animal {
  virtual void speak() { std::cout << "meow\n"; }
};

struct Dog : Animal {
  virtual void speak() { std::cout << "wouf\n"; }
};

struct Programmer : Animal {
  virtual void speak() {
    std::clog << "I refuse to participate in this trite example.\n";
  }
};
```

### Others founs main topic search
- [Resource Acquisition Is Initialization](https://pl.wikipedia.org/wiki/Resource_Acquisition_Is_Initialization)
	Resource acquisition is initialization (inicjowanie przy pozyskaniu zasobu), w skrócie RAII – popularny wzorzec projektowy w C++ i D. Technika łączy przejęcie i zwolnienie zasobu z inicjowaniem i usuwaniem zmiennych.
- [Auto_ptr](https://en.wikipedia.org/wiki/Auto_ptr)
	auto_ptr is a class template that was available in previous versions of the C++ Standard Library (declared in the <memory> header file), which provides some basic RAII features for C++ raw pointers. The C++11 standard made auto_ptr deprecated (it was fully removed in C++17), it has been replaced by the **unique_ptr** class.


	**static_cast** can perform conversions between pointers to related classes, not only from the derived class to its base, but also from a base class to its derived. This ensures that at least the classes are compatible if the proper object is converted, but no safety check is performed during runtime to check if the object being converted is in fact a full object of the destination type. Therefore, it is up to the programmer to ensure that the conversion is safe. On the other side, the overhead of the type-safety checks of dynamic_cast is avoided.[Polymorphism - Stack Overflow](https://stackoverflow.com/questions/2032361/whats-polymorphic-type-in-c)