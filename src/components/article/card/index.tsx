import { Post } from 'contentlayer/generated';

import { Container, Description, Title } from './styles';

type Props = {
  post: Pick<Post, 'title' | 'url'> & {
    description: Post['description'] | null;
  };
};

const ArticleCard = (props: Props) => {
  const { title, description, url } = props.post;
  return (
    <Container href={url}>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  );
};

export default ArticleCard;
