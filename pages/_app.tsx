import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import store from '../public/redux/store';


export default function App({ Component, pageProps }: AppProps) {
  console.warn(store);
  return (
    <>
    <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </>
  );
  
}
