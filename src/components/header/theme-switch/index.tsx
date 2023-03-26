import { MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Container } from './styles';

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const isDark = resolvedTheme === 'dark';
  const Icon = isDark ? MoonIcon : SunIcon;
  const toggleTheme = () => setTheme(isDark ? 'light' : 'dark');

  return (
    <Container
      aria-pressed={isDark}
      aria-label={'Theme switcher'}
      onClick={toggleTheme}
    >
      <Icon />
    </Container>
  );
};
export default ThemeSwitch;
