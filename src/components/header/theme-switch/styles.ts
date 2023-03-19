import { NavItemStyle } from '~/components/header/styles';
import { styled } from '~/stitches.config';

export const Container = styled('button', NavItemStyle, {
  marginLeft: 'auto',
  border: 0,

  appearance: 'none',
  background: 'transparent',
});
