import { useTheme } from 'next-themes';
import { createRef, useEffect } from 'react';

import { BlogConfig } from '../../../blog.config';

const src = 'https://utteranc.es/client.js';
const branch = 'master';

const Utterances = () => {
  const ref = createRef<HTMLDivElement>();
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const utteranceTheme = isDark ? 'github-dark' : 'github-light';

  useEffect(() => {
    const script = document.createElement('script');
    const config = {
      src,
      branch,
      repo: BlogConfig.comment?.repo,
      theme: utteranceTheme,
      label: 'comment',
      async: true,
      crossorigin: 'anonymous',
      'issue-term': 'pathname',
    };

    Object.entries(config).forEach(([key, value]) => {
      script.setAttribute(key, `${value}`);
    });

    ref.current?.childNodes.forEach((children) => {
      ref.current?.removeChild(children);
    });

    ref.current?.appendChild(script);

    return () => {
      ref.current?.childNodes.forEach((children) => {
        ref.current?.removeChild(children);
      });
    };
  }, []);

  if (BlogConfig.comment?.type !== 'utterances') {
    return null;
  }
  return <div className='utterances' ref={ref} />;
};

export default Utterances;
