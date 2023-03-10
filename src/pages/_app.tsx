import type { AppProps } from "next/app";
import MantineProvider from "./provider/MantineStyleProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
