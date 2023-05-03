/* eslint-disable @next/next/no-sync-scripts */

import Layout from "@/component/Layout";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App({ Component, pageProps }) {
  if(Component.getLayout){
    return Component.getLayout( <Component {...pageProps} />);
  }
  return ( 
  <>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.7/dist/umd/popper.min.js" integrity="sha384-zYPOMqeu1DAVkHiLqWBUTcbYfZ8osu1Nd6Z89ify25QV9guujx43ITvfi12/QExE" crossorigin="anonymous"></script>
  <Layout>
  <Component {...pageProps} />
  </Layout>

  </>
  );
}
