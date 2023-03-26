import { InferGetStaticPropsType } from 'next';

import Card from '~/components/card';
import CardContainer from '~/components/card-container';
import Content from '~/components/content';
import Section from '~/components/section';
import SectionList from '~/components/section-list';
import generateRssFeed from '~/utils/generateRssFeed';
import { getSortedPosts } from '~/utils/post';

const HomePage = ({
  posts,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SectionList>
      <Section title={'Daniel Lopatin'}>
        <Content>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            semper semper ex vel ultricies. Praesent eget dignissim lectus.
            Fusce ultricies tortor a sollicitudin eleifend.
          </p>
          <p>
            Pellentesque vehicula turpis vel dolor molestie, in molestie libero
            viverra. Proin ut nulla id quam hendrerit lobortis quis a arcu.
            Curabitur euismod facilisis tellus ullamcorper dignissim.
          </p>
          <p>
            Suspendisse magna odio, consectetur nec tortor a, bibendum tempor
            sem. In vel gravida nibh.
          </p>
        </Content>
      </Section>
      <Section title={'Articles'}>
        <CardContainer direction={'row'}>
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
      <Section title={'Talks'}>
        <CardContainer>
          <Card
            title={'Le Ravissement de Frank N. Stein'}
            description={
              "The viewer takes the perspective of Frankenstein's monster, waking up in a lab and moving through an alienating series of rooms, towards an unknown goal."
            }
            date={'1982-02-18'}
            url={'https://www.youtube.com/watch?v=XmMyx2_4STg'}
          />
          <Card
            title={'Long Road Home'}
            description={'We don\'t rely on "There\'s nowhere to go"\n'}
            date={'2020-09-24'}
            url={'https://www.youtube.com/watch?v=w5azY0dH67U'}
          />
        </CardContainer>
      </Section>
    </SectionList>
  );
};

export default HomePage;

export const getStaticProps = async () => {
  await generateRssFeed();
  const posts = getSortedPosts()
    .slice(0, 3)
    .map((post) => ({
      title: post.title,
      description: post.description ?? null,
      date: post.date,
      url: post.url,
    }));
  return { props: { posts } };
};
