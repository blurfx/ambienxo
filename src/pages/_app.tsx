import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { Header } from '~/components/header';
import { darkTheme, globalCss, styled } from '~/stitches.config';
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css';

const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',

    padding: 0,

    margin: 0,

    '&:focus': {
      outlineColor: '$primaryGradient2',
    },
  },
  'html, body': {
    backgroundColor: '$bgColor',
    fontFamily:
      '"Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    color: '$textPrimary',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  img: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '100%',
  },
  'pre[data-theme="dark"]': {
    colorScheme: 'dark',
  },

  '.dark pre[data-theme="light"]': {
    display: 'none',
  },
  '.light pre[data-theme="dark"]': {
    display: 'none',
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
  paddingTop: '2rem',
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
