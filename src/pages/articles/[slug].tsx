import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

import { allPosts, Post } from 'contentlayer/generated';
import { ArticleContent } from '~/components/article/content';
import { ArticleHeader } from '~/components/article/header';

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
      <ArticleHeader title={post.title} date={post.date} />
      <ArticleContent dangerouslySetInnerHTML={{ __html: post.body.html }} />
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
