import { FileTextIcon, GitHubLogoIcon, HomeIcon } from '@radix-ui/react-icons';

import { Link } from '~/components/header/Link';
import ThemeSwitch from '~/components/header/theme-switch';

import { Container, Nav, Separator } from './styles';
export const Header = () => {
  return (
    <Container>
      <Nav>
        <Link href='/'>
          <HomeIcon />
        </Link>
        <Link href='/articles'>
          <FileTextIcon />
        </Link>
        <Separator decorative orientation='vertical' />
        <Link href='https://github.com/blurfx'>
          <GitHubLogoIcon />
        </Link>
        <ThemeSwitch />
      </Nav>
    </Container>
  );
};
