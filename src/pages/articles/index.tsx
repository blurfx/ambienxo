import type { InferGetStaticPropsType } from 'next';

import { allMDXPosts, allPosts } from 'contentlayer/generated';
import Card from '~/components/card';
import CardContainer from '~/components/card-container';
import Section from '~/components/section';

const ArticlesPage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Section title={'Articles'}>
      <CardContainer>
        {posts.map((post) => (
          <Card
            key={post.url}
            title={post.title}
            description={post.description}
            date={post.date}
            url={post.url}
          />
        ))}
      </CardContainer>
    </Section>
  );
};

export default ArticlesPage;

export const getStaticProps = () => {
  const posts = [...allPosts, ...allMDXPosts]
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map((post) => ({
      title: post.title,
      description: post.description ?? null,
      date: post.date,
      url: post.url,
    }));
  return { props: { posts } };
};
