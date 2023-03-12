import { createStitches } from '@stitches/react';

export const { getCssText, globalCss, styled } = createStitches({
  theme: {
    colors: {
      textPrimary: '#ececec',
      bgColor: '#161616',
    },
    zIndices: {
      texture: 100,
    }
  }
});
