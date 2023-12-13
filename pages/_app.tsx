import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { useRef, useState } from "react";
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient();
  }
  return (
    <React.Fragment>
      <QueryClientProvider client={queryClientRef.current}>
        <Component {...pageProps} />
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </React.Fragment>
  );
}
