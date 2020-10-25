Like other languages, Rust also provides us with all these flexibilities, but in its own way. Here in Rust, we have the following terms:

#### struct
struct: A struct (also called structure), is a custom data type that lets you name and package multiple related values. It starts with the keyword “struct”.

#### impl
impl: An impl is an implementation block that has the keyword “impl”  followed by the same name as that of the struct. It is used to comprise methods, and functions. A struct is allowed to have multiple impl blocks.

#### method
Methods: Methods are similar to functions, they’re declared with the “fn” keyword followed by their name, they can have parameters and a return value. However, methods are different from functions because they’re defined within the context of a struct and their first parameter is always “self”.

#### self
self: “self” keyword represents the instance of the struct, the method is being called on. “self” when used as the first method argument, is a shorthand for “self: Self”. There are also “&self”, which is equivalent to “self: &Self”, and “&mut self”, which is equivalent to “self: &mut Self”. Self in method arguments is syntactic sugar for the receiving type of the method (i.e. the type whose impl this method is in). This also allows for generic types without too much repetition.

#### associated functions
Associated Functions: Functions inside an impl block that do not take “self” as a parameter are called associated functions because they’re associated with the struct. They’re still functions, not methods, because they don’t have an instance of the struct to work with. Associated functions are often used for constructors that will return a new instance of the struct.

Example

```Rust
struct Employee {
  emp_id: u32,
  emp_name: String,
}

impl Employee {
  fn show_details(self: &Self) {
    println!("The employee ID is {}", self.emp_id);
    println!("The employee name is {}", self.emp_name);
  }

  fn mutate_and_show_details(&mut self, new_name: String) {
    self.emp_name = new_name;
    println!("The new name for the ID {}, is {}", self.emp_id, self.emp_name);
  }

  fn create_employee(id: u32, name: String) -> Employee {
    Employee { emp_id: id, emp_name: name } 
  }
}

fn main() {
  let employee = Employee { emp_id: 1, emp_name: "Anmol".to_string() };
  employee.show_details();

  let employee = &mut Employee { emp_id: 1, emp_name: "Anmol".to_string() };
  employee.mutate_and_show_details("Bhavya".to_string());
  employee.show_details();

  let employee = Employee::create_employee(2, "Ayush".to_string());
  employee.show_details();
}
```