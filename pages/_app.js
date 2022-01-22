import { Provider } from 'react-redux';
import store from '../redux/store';
import '../styles/globals.css';
import Header from "../app/components/Header/Header.tsx"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <div className="wrapper">
      <Header />
        <Component {...pageProps} />
      </div>
    </Provider>
  );
}

export default MyApp;