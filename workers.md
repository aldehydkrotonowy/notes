### Web Workers

Web Workers provide a simple means for web content to run scripts in background threads. The worker thread can perform tasks without interfering with the user interface. In addition, they can perform I/O using XMLHttpRequest (although the responseXML and channel attributes are always null). Once created, a worker can send messages to the JavaScript code that created it by posting messages to an event handler specified by that code (and vice versa.)

[Source - Using Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers)

### Service Worker

Service workers essentially act as proxy servers that sit between web applications, and the browser and network (when available). They are intended to (amongst other things) enable the creation of effective offline experiences, intercepting network requests and taking appropriate action based on whether the network is available and updated assets reside on the server. They will also allow access to push notifications and background sync APIs.

[Source - Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

So Web Workers are handy to run expensive scripts without causing the user interface to freeze, while Service Workers are useful to modify the response from network requests (for example, when building an offline app).



|              | Web Workers  | Service Workers  |
|--------------|--------------|------------------|
| Instances    | Many per tab | One for all tabs |
| Lifespan     | Same as tab  | Independent      |
| Intended use | Parallelism  | Offline support  |




### Other notes

- [Spec - webworkers](https://html.spec.whatwg.org/multipage/workers.html#workers)

##### Web Workers can be divided into
	- Shared Webworkers
	- Dedicated Webworkers

##### Features in WW
	- available
		- The navigator object
		- The location object (read-only)
		- XMLHttpRequest
		- setTimeout()/clearTimeout() and setInterval()/clearInterval()
		- The Application Cache
		- Importing external scripts using the importScripts() method
		- Spawning other web workers
	- not available
		- The DOM (it's not thread-safe)
		- The window object
		- The document object
		- The parent object



##### Tips
:pencil: - for passing large amount of data to WW use Transferable Objects

##### Dict
:o: - Web IDL - interface definition language
:o: - Platform objects are objects that implement an interface. [source](https://heycam.github.io/webidl/#dfn-platform-object)
:o: - Transferable Objects - [source](https://developers.google.com/web/updates/2011/12/Transferable-Objects-Lightning-Fast)
:o: - structured clone algorithm - algorithm used to copy `ArrayBuffer` instead of serializing `postMessage()` [source](https://developers.google.com/web/updates/2011/09/Workers-ArrayBuffer)