import React, { ReactElement } from 'react';
import { AppProps } from 'next/app';

const CustomApp = ({ Component, pageProps }: AppProps): ReactElement => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default CustomApp;
