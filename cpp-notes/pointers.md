# Smart pointers 
[source](https://en.wikipedia.org/wiki/Smart_pointer#unique_ptr)

### unique_ptr
A unique_ptr is a container for a raw pointer, which the unique_ptr is said to own. A unique_ptr explicitly prevents copying of its contained pointer (as would happen with normal assignment), but the std::move function can be used to transfer ownership of the contained pointer to another unique_ptr. A unique_ptr cannot be copied because its copy constructor and assignment operators are explicitly deleted.

### shared_ptr
A shared_ptr is a container for a raw pointer. It maintains reference counting ownership of its contained pointer in cooperation with all copies of the shared_ptr. An object referenced by the contained raw pointer will be destroyed when and only when all copies of the shared_ptr have been destroyed.

Example:
```c++
std::shared_ptr<int> p0(new int(5));  // Valid, allocates 1 integer and initialize it with value 5.
std::shared_ptr<int[]> p1(new int[5]);  // Valid, allocates 5 integers.
std::shared_ptr<int[]> p2 = p1;  // Both now own the memory.

p1.reset();  // Memory still exists, due to p2.
p2.reset();  // Deletes the memory, since no one else owns the memory.
```

### weak_ptr
A weak_ptr is a container for a raw pointer. It is created as a copy of a shared_ptr. The existence or destruction of weak_ptr copies of a shared_ptr have no effect on the shared_ptr or its other copies. After all copies of a shared_ptr have been destroyed, all weak_ptr copies become empty.

Example:
```c++
std::shared_ptr<int> p1 = std::make_shared<int>(5);
std::weak_ptr<int> wp1 {p1};  // p1 owns the memory.

{
  std::shared_ptr<int> p2 = wp1.lock();  // Now p1 and p2 own the memory.
  // p2 is initialized from a weak pointer, so you have to check if the
  // memory still exists!
  if (p2) {
    DoSomethingWith(p2);
  }
}
// p2 is destroyed. Memory is owned by p1.

p1.reset();  // Delete the memory.

std::shared_ptr<int> p3 = wp1.lock(); 
// Memory is gone, so we get an empty shared_ptr.
if (p3) {  // code will not execute
  ActionThatNeedsALivePointer(p3);
}
```