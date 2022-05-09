import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
      <script src="https://cdn.tailwindcss.com"></script>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}