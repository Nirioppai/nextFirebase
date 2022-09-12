import Navbar from '../components/Navbar';
import '../styles/globals.css';
import { Toaster } from 'react-hot-toast';

// can put global elements here and use authentication on this file
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
