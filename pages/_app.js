import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import Store from '../store';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Toaster position="top-center" reverseOrder={false} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
