import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Theme color for mobile browsers - matches light theme background */}
        <meta name="theme-color" content="#FFF7ED" />
        <meta name="theme-color" content="#1C1917" media="(prefers-color-scheme: dark)" />
        
        {/* iOS Safari status bar styling */}
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
