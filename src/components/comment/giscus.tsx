import { createRef, useEffect } from 'react';

import { BlogConfig } from '../../../blog.config';

const Giscus = () => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    const script = document.createElement('script');
    if (BlogConfig.comment?.type !== 'giscus') {
      return;
    }
    const config = {
      'data-repo': BlogConfig.comment.repo,
      'data-repo-id': BlogConfig.comment.repoId,
      'data-category': BlogConfig.comment.category,
      'data-category-id': BlogConfig.comment.categoryId,
      'data-mapping': 'pathname',
      'data-strict': '0',
      'data-reactions-enabled': '1',
      'data-emit-metadata': '0',
      'data-input-position': 'bottom',
      'data-theme': 'preferred_color_scheme',
      'data-lang': BlogConfig.comment.lang ?? 'en',
      'data-loading': BlogConfig.comment.lazy ? 'lazy' : undefined,
      src: 'https://giscus.app/client.js',
      crossOrigin: 'anonymous',
      async: true,
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

  if (BlogConfig.comment?.type !== 'giscus') {
    return null;
  }
  return <div className={'giscus'} ref={ref}></div>;
};

export default Giscus;
