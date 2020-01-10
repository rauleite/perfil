import { ServerStyleSheets } from "@material-ui/core/styles";
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

import theme from "../src/theme";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,700&display=swap" rel="stylesheet" />

          {/* <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          /> */}
        </Head>
        <body
          style={{
            overflowY: "scroll",
            // backgroundImage: "url('https://cdn.dribbble.com/users/1100256/screenshots/7124464/media/94a5e074f80ae9466705cf4c833c3432.gif')",
            // backgroundImage: "url('https://i.stack.imgur.com/EZ1Mp.gif')",
            // backgroundImage: "url('https://i.pinimg.com/originals/5f/ee/8e/5fee8e4a9fea271529cfd8828dd990d5.gif')",
            // backgroundImage: "url('https://cdn.dribbble.com/users/1201592/screenshots/9078494/media/422a760a51cef7de2fa3db9daf697853.gif')",
            // backgroundImage: "url('https://cdn-images-1.medium.com/max/2000/1*OF0xEMkWBv-69zvmNs6RDQ.gif')",
            backgroundImage: "url('https://www.publicissapient.com/content/dam/ps-rebrand/insights/leveraging-data-to-predict-customer-needs/Insights_LeverageData_Hero_DarkLeft.gif')",
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat",
            height: '100vh',
            padding:0,
            margin:0
          }}

        >
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement()
    ]
  };
};
