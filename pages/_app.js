import Layout from "../components/Layout";
import "../styles/all.min.css";
import "../styles/bootstrap-icons.css";
import "../styles/tiny-slider.css";
import "../styles/plyr.css";
import "../styles/style.css";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Script
        type="text/javascript"
        src="/js/bootstrap.bundle.js"
        // strategy="afterInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/js/tiny-slider.js"
        // strategy="afterInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/js/sticky.min.js"
        // strategy="afterInteractive"
      ></Script>
      <Script
        type="text/javascript"
        src="/js/plyr.js"
        // strategy="afterInteractive"
      >
        {" "}
      </Script>
      {/* <Script
        type="text/javascript"
        src="/js/functions.js"
        // strategy="afterInteractive"
      ></Script> */}
    </>
  );
}

export default MyApp;
