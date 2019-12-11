### App.js
```javascript
import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useOpacityFromScroll from './hooks/useOpacityFromScrollHook';
import { useEventListener } from './hooks/useEventListener';


function App() {
  const { opacity, scrollHandler } = useOpacityFromScroll();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handler = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY })
  }, [setCoords])


  useEventListener('mousemove', handler);
  useEventListener("scroll", scrollHandler);


  return (
    <div className="App" >
      <header className="App-header" style={{ opacity: opacity }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          The mouse position is ({coords.x}, {coords.y})
          </div>

      </header>
      <div style={{ height: '500px' }}> dummy content</div>
      <div style={{ height: '500px' }}> dummy content</div>
      <div style={{ height: '500px' }}> dummy content</div>
      <div style={{ height: '500px' }}> dummy content</div>
    </div>
  );
}

export default App;
```
### useEventListener.js
```javascript
import { useEffect, useRef } from "react";

export function useEventListener(eventName, handler, element = window) {

  const savedHandler = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {

    const isSupported = element && element.addEventListener;

    if (!isSupported) return;

    const eventListener = event => savedHandler.current(event);

    element.addEventListener(eventName, eventListener);

    return () => {
      element.removeEventListener(eventName, eventListener);
    }
  }, [eventName, element]);
}
```
### useOpacityFromScrollHook.js
```javascript
import { useState, useCallback, useMemo } from "react";

const useOpacityFromScroll = () => {
  const [scrollPos, setScroll] = useState(0);

  const opacity = useMemo(() => {
    let opacity;
    if (!scrollPos) opacity = 0;
    if (scrollPos < 0) opacity = 0;
    if (scrollPos > 200) opacity = 1;
    opacity = scrollPos / 200;
    console.log('scrollPos is :', scrollPos, "opacity is :", opacity);
    return opacity;
  }, [scrollPos])

  const handler = useCallback((event) => {
    const pos = event.target.scrollingElement.scrollTop || 0;
    if (pos < 0) setScroll(0);
    if (pos >= 0) setScroll(pos);
  }, [setScroll]);

  return {
    opacity: opacity,
    scrollHandler: handler
  }
}

export default useOpacityFromScroll;
```

--------------------------------------------------------------