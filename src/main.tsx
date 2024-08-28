import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { router } from "./routes/AppRouter";

import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";

import { PersistGate } from "redux-persist/integration/react";

import { ModalProvider } from "./context/ModalContext.tsx";

import "./firebase/firebase.ts";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ModalProvider>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </ModalProvider>
  </Provider>
);
