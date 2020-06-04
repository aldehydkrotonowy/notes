
#### find proces which blocks port 
in cmd (admin)
`netstat -ano | findstr :PORT_NUMBER`

then 

`taskkill /PID PROCESS_PID /F`
- [soruce](https://stackoverflow.com/questions/39632667/how-do-i-kill-the-process-currently-using-a-port-on-localhost-in-windows)