import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Header } from '~/components/header';
import { darkTheme, globalCss, styled } from '~/stitches.config';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',

    padding: 0,

    margin: 0,
  },
  'html, body': {
    backgroundColor: '$bgColor',
    color: '$textPrimary',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '@media (prefers-color-scheme: dark)': {
    html: {
      colorScheme: 'dark',
    },
  },
});

const NoiseTexture = styled('svg', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '120vh',
  opacity: '0.2',
  zIndex: '$texture',
  pointerEvents: 'none',
});

const Container = styled('div', {
  minHeight: '100vh',
});

const Wrapper = styled('div', {
  margin: '0 auto',
  py: '1rem',
  maxWidth: '$contentWidth',
});

const Main = styled('main', {
  paddingTop: '4rem',
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <NoiseTexture>
        <filter id='noise'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency={0.7}
            numOctaves={4}
            stitchTiles='stitch'
          ></feTurbulence>
          <feColorMatrix type='saturate' values='0'></feColorMatrix>
        </filter>
        <rect width='100%' height='100%' filter='url(#noise)'></rect>
      </NoiseTexture>
      <Container>
        <Wrapper>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem={true}
            value={{
              light: 'light',
              dark: darkTheme.className,
            }}
          >
            <Header />
            <Main>
              <Component {...pageProps} />
            </Main>
          </ThemeProvider>
        </Wrapper>
      </Container>
    </>
  );
}
