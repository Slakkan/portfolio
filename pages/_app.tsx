import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <link
                    rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap-grid.min.css"
                />
            </Head>
            <Header />
            <Component {...pageProps} />
        </>
    );
}
export default MyApp;
