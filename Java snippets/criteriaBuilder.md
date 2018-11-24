- [Source](https://www.programcreek.com/java-api-examples/index.php?api=javax.persistence.criteria.CriteriaQuery)

```java
public static DeploymentSpec findDeploymentSpecByVirtualSystemProjectAndRegion(EntityManager em, VirtualSystem vs,
        String projectId, String region) {

    CriteriaBuilder cb = em.getCriteriaBuilder();

    CriteriaQuery<DeploymentSpec> query = cb.createQuery(DeploymentSpec.class);

    Root<DeploymentSpec> root = query.from(DeploymentSpec.class);

    query = query.select(root)
            .where(cb.equal(root.get("projectId"), projectId),
                    cb.equal(root.get("region"), region),
                    cb.equal(root.get("virtualSystem"), vs));

    try {
        return em.createQuery(query).getSingleResult();
    } catch (NoResultException nre) {
        return null;
    }
}
```

### code 2
```java
public static VM findByOpenstackId(EntityManager em, String id) {

    CriteriaBuilder cb = em.getCriteriaBuilder();

    CriteriaQuery<VM> query = cb.createQuery(VM.class);

    Root<VM> root = query.from(VM.class);

    query = query.select(root)
        .where(cb.equal(root.get("openstackId"), id));

    try {
        return em.createQuery(query).getSingleResult();
    } catch (NoResultException nre) {
        return null;
    }
}
```
