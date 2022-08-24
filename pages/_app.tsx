// 모든 page component 를 감싸는 공통 레이아웃
// 최상위 파일
// 이 이후 _document.tsx 실행됨

import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return;
  <QueryClientProvider client={queryClient}>
    <Component {...pageProps} />
  </QueryClientProvider>;
}

export default MyApp;
