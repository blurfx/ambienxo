import { InferGetStaticPropsType } from 'next';

import { allPosts } from 'contentlayer/generated';
import ArticleCard from '~/components/article/card';

const ArticlesPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      {posts.map((post) => (
        <ArticleCard key={post.url} post={post} />
      ))}
    </>
  );
};

export default ArticlesPage;

export async function getStaticProps() {
  const posts = allPosts
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map((post) => ({
      title: post.title,
      description: post.description ?? null,
      url: post.url,
    }));
  return { props: { posts } };
}
