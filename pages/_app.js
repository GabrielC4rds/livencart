import { Provider } from 'react-redux';
import '../styles/globals.css';
import Header from "../app/components/Header/Header.tsx"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import store from '../redux/store';

function MyApp({ Component, pageProps }) {
  let persistor = persistStore(store);
  //usando persistStore para persistir os dados no local storage
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>

      <div className="wrapper">
      <Header />
        <Component {...pageProps} />
      </div>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;