### Links
- [Spring Data JPA - Interface-based Projections](https://www.logicbig.com/tutorials/spring-framework/spring-data/interface-based-projections.html)
- [Lombok annotation](https://stormit.pl/lombok/#requiredargsconstructor)






















### examples
```java
@Entity
public class Employee {
  @Id
  @GeneratedValue
  private Long id;
  private String name;
  private String dept;
  private Int salary;
}

//projection interface
public interface EmployeeSalary {
  String getName();
  Int getSalary();
}

//repository
public class EmployeeRepository extends CrudRepository<Employee, Long>{
  List<EmployeeSalary> findBy();
  List<EmployeeSalary> findByDepth(String depth)
}

//Client
@Component
public class ExampleClient {
  @Autowired
  private EmployeeRepository repo;

  List<Employee> employees = createEmployees();
  repo.saveAll(employees);

  Iterable<Employees> all = repo.findAll();
  all.forEach(System.out::println);

  List<EmployeeSalary> list = repo.findBy();
  for(EmployeeSalary es : list){
    System.out.printf("result: %s %n",es.getName(), getSalary())
  }

  private List<Employee> createEmployees() {
    return Arrays.asList(
            Employee.create("Diana", "Admin", 3000),
            Employee.create("Mike", "IT", 1000),
            Employee.create("Rose", "Admin", 4000),
            Employee.create("Sara", "Admin", 3500),
            Employee.create("Tanaka", "IT", 3000),
            Employee.create("Charlie", "IT", 4500)
    );
  }
}
```