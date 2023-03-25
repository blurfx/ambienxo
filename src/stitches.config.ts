import { createStitches } from '@stitches/react';
export const { getCssText, globalCss, styled, createTheme, css } =
  createStitches({
    theme: {
      colors: {
        gray1: '#fff',
        gray2: '#ececec',
        gray3: '#bdbdbd',
        gray5: '#71717a',
        gray9: '#161616',
        gray10: '#111511',

        blue1: '#c3c4cd',

        primaryGradient1: 'hsl(300 95% 80%)',
        primaryGradient2: 'hsl(346 96% 77%)',
        primaryGradient3: 'hsl(358 97% 60%)',
        secondaryGradient1: 'hsl(191 96% 89%)',
        secondaryGradient2: 'hsl(232 96% 89%)',
        secondaryGradient3: 'hsl(282 97% 88%)',
        cardGradient1: 'rgba(148, 152, 240, 0.1)',
        cardGradient2: 'rgba(223, 92, 208, 0.1)',
        cardGradient3: 'rgba(232, 98, 98, 0.1)',

        textPrimary: '$gray10',
        textSecondary: '$gray5',
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
        sm: '6px',
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
    textSecondary: '$gray3',
    bgColor: '$gray9',
  },
});
