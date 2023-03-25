import type { Post } from 'contentlayer/generated';
import { formatDate } from '~/utils/date';

import { Container, Time, Title } from './styles';

type Props = Pick<Post, 'title' | 'date'>;
export const ArticleHeader = ({ title, date }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Time dateTime={date}>{formatDate(new Date(date))}</Time>
    </Container>
  );
};
