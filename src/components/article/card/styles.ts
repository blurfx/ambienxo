import Link from 'next/link';

import { styled } from '~/stitches.config';

export const Container = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  width: 'calc(100% + 2rem)',
  padding: '1rem',
  marginLeft: '-1rem',
  borderRadius: '$sm',

  '&:hover': {
    background:
      'linear-gradient(90deg, $cardGradient1 0%, $cardGradient2 51%, $cardGradient3 100%)',
  },
});

export const Title = styled('h2', {
  fontSize: '1rem',
  fontWeight: 500,
  color: '$textPrimary',
});

export const Description = styled('p', {
  fontSize: '1rem',
  fontWeight: 400,
  color: '$textSecondary',
});
