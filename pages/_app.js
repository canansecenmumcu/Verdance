import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "../styles/globals.css";
import Layout from "@/layout/Layout";
config.autoAddCss = false

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} /> 
    </Layout>
  );
}
