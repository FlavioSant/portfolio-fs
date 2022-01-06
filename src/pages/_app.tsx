import type { AppProps } from "next/app";
import type { NextPage } from "next";

import "../styles/global.scss";

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
