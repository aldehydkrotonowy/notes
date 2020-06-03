
### React
- [reconciliation](https://github.com/facebook/react/issues/11527#issuecomment-360199710)
- [SyntheticEvent](https://pl.reactjs.org/docs/events.html)


### stack overflow
- [PropType for ref](https://stackoverflow.com/questions/48007326/what-is-the-correct-proptype-for-a-ref-in-react)











```javascript
SiLeadTimeTable.propTypes = {
  tableRows: PropTypes.arrayOf(
    PropTypes.shape({
      order: PropTypes.number,
      id: PropTypes.number,
      transport: PropTypes.string,
      country: PropTypes.string,
      ladingPort: PropTypes.string,
      shipmentDay: PropTypes.oneOf([
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ]),
      leadTime: PropTypes.number,
      startDate: PropTypes.string,
      endDate: PropTypes.string
    }).isRequired
  ),
  userHasAccessRights: PropTypes.bool.isRequired,
  deleteRow: PropTypes.func.isRequired,
  updateRow: PropTypes.func.isRequired,
  handleShowHidePopup: PropTypes.func.isRequired,
  dictionaries: PropTypes.object.isRequired
};

classes: PropTypes.objectOf(PropTypes.string).isRequired


propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

refProp: PropTypes.oneOfType([
    // Either a function
    PropTypes.func, 
    // Or the instance of a DOM native element (see the note about SSR)
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
])
```