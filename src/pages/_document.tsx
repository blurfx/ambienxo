import { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '~/stitches.config';

export default function Document() {
  return (
    <Html>
      <Head>
        <style dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
