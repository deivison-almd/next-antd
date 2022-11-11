require('../styles/variables.less');
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/Header/Header';
// import '../fonts/files-ttf/Audrey-Medium.ttf';

// import 'antd/dist/antd.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
