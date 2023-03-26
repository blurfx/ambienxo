import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { SEOConfig } from '../../../blog.config';
import { allPosts, Post } from 'contentlayer/generated';
import { ArticleHeader } from '~/components/article/header';
import { Content } from '~/components/content';

type Props = {
  post: Post;
};

type Params = ParsedUrlQuery & {
  slug: string;
};

const ArticlePage = ({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${SEOConfig.canonical}${post.url}`}
      />
      <ArticleHeader title={post.title} date={post.date} />
      <Content dangerouslySetInnerHTML={{ __html: post.body.html }} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths<Params> = () => {
  const paths = allPosts.map((post) => post.url);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props, Params> = ({ params }) => {
  const post = allPosts.find((p) => p._raw.flattenedPath === params?.slug)!;
  return {
    props: {
      post,
    },
  };
};

export default ArticlePage;
