import React, { createContext, useReducer } from "react";
import { useLocation } from "react-router-dom";

const contextStore = {};

const contextFactory = (contextName) => {
  if (contextName in contextStore) {
    return contextStore[contextName];
  } else {
    const newContext = createContext(null);
    contextStore[contextName] = newContext;
    return newContext;
  }
};

const ContextProviderFactory = ({
  children,
  reducer,
  contextName = null,
  initialState = {},
}) => {
  const [context, dispatch] = useReducer(reducer, initialState);

  const location = useLocation();
  const [, view] = location.pathname.split("/");

  const selectedContext = contextName || view;
  const { Provider } = contextFactory(selectedContext);

  return (
    <Provider
      value={{
        context,
        dispatch,
      }}
    >
      {children}
    </Provider>
  );
};

const ContextConsumerFactory = (props) => {
  const location = useLocation();
  const [, view] = location.pathname.split("/");
  const selectedContext = props.contextName || view;
  const { Consumer } = contextFactory(selectedContext);
  return (
    <Consumer>
      {({ context, ...rest }) => {
        if (context === undefined) {
          throw new Error("StateConsumer must be used within a StateProvider");
        }

        return (
          <>
            {React.Children.map(props.children, (child, i) => {
              if (!child) return null;
              if (i === 0) {
                return React.cloneElement(child, {
                  context: { ...context, ...rest },
                });
              } else {
                return child;
              }
            })}
          </>
        );
      }}
    </Consumer>
  );
};

const withContext = (Component, contextName) => (props) => {
  const location = useLocation();
  const [, view] = location.pathname.split("/");
  const selectedContext = contextName || view;
  const { Consumer } = contextFactory(selectedContext);
  return (
    <Consumer>
      {({ context, ...rest }) => {
        if (context === undefined) {
          throw new Error("StateConsumer must be used within a StateProvider");
        }
        return <Component context={{ ...context, ...rest }} {...props} />;
      }}
    </Consumer>
  );
};

export { withContext, ContextProviderFactory, ContextConsumerFactory };
