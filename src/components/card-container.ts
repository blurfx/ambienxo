import { styled } from '~/stitches.config';

export const CardContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  variants: {
    direction: {
      row: {
        flexDirection: 'row',

        '@sm': {
          flexDirection: 'column',
        },
      },
    },
  },
});
