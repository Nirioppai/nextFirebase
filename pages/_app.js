import Navbar from '../components/Navbar';
import '../styles/globals.css';

// can put global elements here and use authentication on this file
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
