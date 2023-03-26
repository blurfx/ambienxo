import { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';
import { ThemeProvider } from 'next-themes';

import { SEOConfig } from 'blog.config';
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
    overflowY: 'overlay',
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

const HeaderContainer = styled('header', {
  position: 'fixed',
  top: 0,

  width: '100%',
  height: '4.5rem',

  backgroundColor: '$headerContainerBg',
  backdropFilter: 'blur(8px)',
});

const Container = styled('div', {
  minHeight: '100vh',
  '@sm': {
    px: '1rem',
  },
});

const Wrapper = styled('div', {
  margin: '0 auto',
  py: '1rem',
  maxWidth: '$contentWidth',
});

const Main = styled('main', {
  paddingTop: '6.5rem',
});

export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <DefaultSeo {...SEOConfig} />
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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem={true}
          value={{
            light: 'light',
            dark: darkTheme.className,
          }}
        >
          <HeaderContainer>
            <Wrapper>
              <Header />
            </Wrapper>
          </HeaderContainer>
          <Wrapper>
            <Main>
              <Component {...pageProps} />
            </Main>
          </Wrapper>
        </ThemeProvider>
      </Container>
    </>
  );
}
