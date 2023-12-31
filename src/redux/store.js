// import { createStore } from "redux";
// import reducers from "./reducers/index"

// const store = createStore(reducers,{}, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index"

const store = configureStore({
    reducer: reducers,
    preloadedState: {}, // Initial state
    devTools: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  });

export default store;