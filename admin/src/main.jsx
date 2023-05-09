import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();
ReactDOM.render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
      </PersistGate>
    </QueryClientProvider>
  </Provider>,
  document.getElementById("root")
);
