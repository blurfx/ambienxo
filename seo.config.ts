import { NextSeoProps } from 'next-seo';
const SEOConfig: NextSeoProps = {
  title: 'Blog Title',
  description: 'Blog Description',
  canonical: 'https://example.com',
  openGraph: {
    title: 'Blog Title',
    description: 'Blog Description',
    url: 'https://example.com',
    images: [
      {
        url: 'https://example.com/og-image.png',
      },
    ],
  },
};

export default SEOConfig;
