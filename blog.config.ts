import { NextSeoProps } from 'next-seo';

type BlogConfigOptions = {
  title: string;
  description: string;
  url: string;
  comment:
    | { type: 'utterances'; repo: string }
    | {
        type: 'giscus';
        repo: string;
        repoId: string;
        category: string;
        categoryId: string;
        lang?: 'ko' | 'en'; // defaults to 'en'
        lazy?: boolean;
      }
    | null;
  googleAnalyticsId?: string; // gtag id
};
export const BlogConfig: BlogConfigOptions = {
  title: 'Ambienxo',
  description: 'Ambienxo, Next.js Theme for minimalists.',
  url: 'http://localhost:3000',
  comment: {
    type: 'giscus',
    repo: 'blurfx/ambienxo',
    repoId: 'R_kgDOJOhU2Q',
    category: 'Comments',
    categoryId: 'DIC_kwDOJOhU2c4CVKFk',
  },
};
export const SEOConfig: NextSeoProps = {
  title: BlogConfig.title,
  description: BlogConfig.description,
  canonical: BlogConfig.url,
  openGraph: {
    title: BlogConfig.title,
    description: BlogConfig.description,
    url: BlogConfig.url,
    images: [
      {
        url: `${BlogConfig.url}/images/thumbnail.png`,
      },
    ],
  },
};
