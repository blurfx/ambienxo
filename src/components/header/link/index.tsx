import type NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

import { Container } from './styles';

type Props = React.ComponentProps<typeof NextLink>;
export const Link = ({
  children,
  ...props
}: React.PropsWithChildren<Props>) => {
  const pathname = usePathname();
  return (
    <Container active={pathname === props.href} {...props}>
      {children}
    </Container>
  );
};
