import type { InferGetStaticPropsType } from 'next';

import { allPosts } from 'contentlayer/generated';
import ArticleCard from '~/components/article/card';
import Section from '~/components/section';
import { styled } from '~/stitches.config';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
const ArticlesPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Section title={'Articles'}>
      <Container>
        {posts.map((post) => (
          <ArticleCard key={post.url} post={post} />
        ))}
      </Container>
    </Section>
  );
};

export default ArticlesPage;

export const getStaticProps = () => {
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
};
