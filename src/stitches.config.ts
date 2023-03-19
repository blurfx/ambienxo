import { createStitches } from '@stitches/react';
export const { getCssText, globalCss, styled, createTheme, css } =
  createStitches({
    theme: {
      colors: {
        gray1: '#fff',
        gray2: '#ececec',
        gray9: '#161616',
        gray10: '#111511',

        blue1: '#c3c4cd',

        primaryGradient1: 'hsl(300 95% 80%)',
        primaryGradient2: 'hsl(346 96% 77%)',
        primaryGradient3: 'hsl(358 97% 60%)',
        secondaryGradient1: 'hsl(191 96% 89%)',
        secondaryGradient2: 'hsl(232 96% 89%)',
        secondaryGradient3: 'hsl(282 97% 88%)',

        textPrimary: '$gray10',
        bgColor: '$gray1',
        separator: '$blue1',
      },
      zIndices: {
        texture: 100,
      },
      sizes: {
        contentWidth: '700px',
        navItemSize: '2.5rem',
      },
      radii: {
        navItem: '6px',
      },
    },
    utils: {
      py: (value: string | number) => ({
        paddingTop: value,
        paddingBottom: value,
      }),
    },
  });

export const darkTheme = createTheme('dark', {
  colors: {
    textPrimary: '$gray2',
    bgColor: '$gray9',
  },
});
