import logo from './logo.svg';
import './App.css';
import Router from './router';
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store"
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router/>
      </PersistGate>
    </Provider>
    </>
  );
}

export default App;
