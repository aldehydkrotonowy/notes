### Links
- [Spring Data JPA - Interface-based Projections](https://www.logicbig.com/tutorials/spring-framework/spring-data/interface-based-projections.html)
- [Lombok annotation](https://stormit.pl/lombok/#requiredargsconstructor)
- [Java code snippets](https://www.codota.com/code/java/classes/org.springframework.security.web.csrf.CookieCsrfTokenRepository)
- [DAO czy Repository? Jaką warstwę dostępu do danych wykorzystywać?](https://bykowski.pl/dao-czy-repository-jaka-warstwe-dostepu-do-danych-wykorzystywac/)
- [Hibernate - Szybki wstęp](https://www.javappa.com/kurs-spring/materialy-spring-hibernate-poczatek)
- [@EqualsAndHashCode - annotation](https://projectlombok.org/features/EqualsAndHashCode)
- [Aggregate Functions - postgreSQL](https://www.postgresql.org/docs/9.5/functions-aggregate.html)
- [Constructor Injection in Spring with Lombok](https://www.baeldung.com/spring-injection-lombok)
- [Introduction to Project Lombok](https://www.baeldung.com/intro-to-project-lombok)

### Hibernate
- [Chapter 2. Mapping Entities](https://docs.jboss.org/hibernate/annotations/3.5/reference/en/html/entity.html)


### Annotations
- [Spring Data JPA @Query](https://www.baeldung.com/spring-data-jpa-query)

### Gradle
- [Creating New Gradle Builds](https://guides.gradle.org/creating-new-gradle-builds/)

















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


### Lombork
@RequiredArgsConstructor - Generates a constructor with required arguments. Required arguments are final fields and fields with constraints such as @NonNull.