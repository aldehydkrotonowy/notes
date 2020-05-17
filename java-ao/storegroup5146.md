### StoreGroupStaticInputMapper.java
```java
package com.example.foo.orderslistservice.dictionaries.staticinput.storegroup.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.example.foo.orderslistservice.dictionaries.staticinput.storegroup.dto.StoreGroupCartesianOutputDto;
import com.example.foo.orderslistservice.dao.repository.staticinput.StoreGroupStaticInputRepository;

@Mapper(componentModel = "spring")
public interface StoreGroupStaticInputMapper {

//	@Mapping(target = "id", expression = "java(cartesian.getId())")
//	@Mapping(target = "departmentId", expression = "java(cartesian.getDepartmentId())")
//	@Mapping(target = "departmentName", expression = "java(cartesian.getDepartmentName())")
//	@Mapping(target = "seasonId", expression = "java(cartesian.getSeasonId())")
//	@Mapping(target = "seasonName", expression = "java(cartesian.getSeasonName())")
//	@Mapping(target = "classId", expression = "java(cartesian.getClassId())")
//	@Mapping(target = "className", expression = "java(cartesian.getClassName())")
//	@Mapping(target = "subclassId", expression = "java(cartesian.getSubclassId())")
//	@Mapping(target = "subclassName", expression = "java(cartesian.getSubclassName())")
//	@Mapping(target = "storesGroupId", expression = "java(cartesian.getStoreGroupId())")
//	@Mapping(target = "storesGroupName", expression = "java(cartesian.getStoreGroupName())")
//	@Mapping(target = "isActive", expression = "java(cartesian.getActive())")
//	StoreGroupCartesianOutputDto cartesianDataToDto(StoreGroupStaticInputRepository.CartesianData cartesian);

	@Mapping(target = "id", expression = "java(cartesianData.getId())")
	@Mapping(target = "department.id", expression = "java(cartesianData.getDepartmentId())")
	@Mapping(target = "department.name", expression = "java(cartesianData.getDepartmentName())")
	@Mapping(target = "season.id", expression = "java(cartesianData.getSeasonId())")
	@Mapping(target = "season.name", expression = "java(cartesianData.getSeasonName())")
	@Mapping(target = "clas.id", expression = "java(cartesianData.getClassId())")
	@Mapping(target = "clas.name", expression = "java(cartesianData.getClassName())")
	@Mapping(target = "subclass.id",expression = "java(cartesianData.getSubclassId())")
	@Mapping(target = "subclass.name", expression = "java(cartesianData.getSubclassName())")
	@Mapping(target = "storesGroup.id", expression = "java(cartesianData.getStoreGroupId())")
	@Mapping(target = "storesGroup.name", expression = "java(cartesianData.getStoreGroupName())")
	@Mapping(target = "isActive", expression = "java(cartesianData.getActive())")
	StoreGroupCartesianOutputDto cartesianDataToDto(StoreGroupStaticInputRepository.CartesianData cartesianData);
}
```
### StoreGroupCartesianOutputDto.java

```java
package com.example.foo.orderslistservice.dictionaries.staticinput.storegroup.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.example.foo.orderslistservice.dto.SimpleDictionaryDto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class StoreGroupCartesianOutputDto {
//	private Long id;
//	private Long departmentId;
//	private String departmentName;
//	private Long seasonId;
//	private String seasonName;
//	private Long classId;
//	private String className;
//	private Long subclassId;
//	private String subclassName;
//	private Long storesGroupId;
//	private String storesGroupName;
//	private Boolean isActive;


	private Long id;
	private SimpleDictionaryDto department;
	private SimpleDictionaryDto season;
	@JsonProperty("class")
	private SimpleDictionaryDto clas;
	private SimpleDictionaryDto subclass;
	private SimpleDictionaryDto storesGroup;
	private Boolean isActive;
}
```