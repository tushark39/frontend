import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
// import "../static/css/styles.css";

class MyDocument extends Document {

    setGoogleTags() {
        if (publicRuntimeConfig.PRODUCTION) {
            return
        }
    }
    render() {
        return (
            <Html lang="en">
            
                <Head>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    {/* <link
                 rel="stylesheet"
                 href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.3/css/bootstrap.min.css" 
                /> */}
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                        integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
                        crossorigin="anonymous" />

                    {/* <link rel="stylesheet" 
                href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                /> */}
                    <link rel="stylesheet" href="/_next/static/css/styles.css" />
              {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-FSB26235ZC"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                      window.dataLayer = window.dataLayer || [];
                      function gtag(){dataLayer.push(arguments);}
                      gtag('js', new Date());
                    
                      gtag('config', 'G-FSB26235ZC');
                    `
                }}></script>*/}
                </Head>

                <body id='root'>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument;