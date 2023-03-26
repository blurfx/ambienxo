import { ParsedUrlQuery } from 'querystring';

import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';

import { BlogConfig, SEOConfig } from '../../../blog.config';
import { allPosts, Post } from 'contentlayer/generated';
import { ArticleHeader } from '~/components/article/header';
import Giscus from '~/components/comment/giscus';
import Utterances from '~/components/comment/utterances';
import Content from '~/components/content';

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
    <div>
      <NextSeo
        title={post.title}
        description={post.description}
        canonical={`${SEOConfig.canonical}${post.url}`}
        openGraph={{
          title: post.title,
          description: post.description,
          images: post.thumbnail
            ? [{ url: `${BlogConfig.url}${post.thumbnail}` }]
            : undefined,
        }}
      />
      <ArticleHeader title={post.title} date={post.date} />
      <Content dangerouslySetInnerHTML={{ __html: post.body.html }} />
      {BlogConfig.comment?.type === 'giscus' && <Giscus />}
      {BlogConfig.comment?.type === 'utterances' && <Utterances />}
    </div>
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
