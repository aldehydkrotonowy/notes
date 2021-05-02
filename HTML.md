### HTTP methods

|      | change the state of the server | side effects | cached | URL parametrization | request body        |
|------|--------------------------------|--------------|--------|---------------------|---------------------|
| GET  | NO                             | NO           | YES    | YES                 | YES but meaningless |
| POST | YES                            | YES          | NO     | YES                 | YES                 |
| PUT  | YES idempotent                 | NO           | NO     |                     | YES                 |