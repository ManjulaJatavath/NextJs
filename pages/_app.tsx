
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/Home.module.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <>
  <Navbar />
  <Layout>
      <Component {...pageProps} />
  </Layout>
  </>
}
