import { Root as SeparatorRoot } from '@radix-ui/react-separator';

import { css, styled } from '~/stitches.config';

export const Container = styled('div', {
  width: '100%',
});

export const Nav = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
});

export const NavItemStyle = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '$navItemSize',
  height: '$navItemSize',
  borderRadius: '$sm',

  '&:hover': {
    background:
      'linear-gradient(25deg, $primaryGradient1 1.7%, $primaryGradient2 50%, $primaryGradient3 100%)',

    '& path': {
      fill: '$gray9',
    },
  },

  '& path': {
    fill: '$textPrimary',
  },
});

export const Separator = styled(SeparatorRoot, {
  backgroundColor: '$separator',
  '&[data-orientation=vertical]': {
    width: 1,
    height: '1rem',
  },
});
