import '../styles/globals.css'
import Myfirebase from '../firebase/firebaseinit';

function MyApp({ Component, pageProps }) {
  Myfirebase();
  return <Component {...pageProps} />
}

export default MyApp
