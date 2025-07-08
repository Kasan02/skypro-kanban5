import {
  CardsWrapper,
  CardItem,
  CardContainer,
  CardGroup,
  CardTheme,
  CardBtn,
  CardTitle,
  CardContent,
  CardDate,
  SkeletonCard,
  SkeletonBox,
  SkeletonDots
} from './card.styled';

const Card = ({ title, theme, date, loading }) => {
  if (loading) {
    return (
      <SkeletonCard>
        <SkeletonBox style={{ height: '20px', width: '50%' }} />
        <SkeletonBox style={{ height: '14px', width: '80%', marginTop: '10px' }} />
        <SkeletonBox style={{ height: '64px', width: '100%', marginTop: '10px' }} />
        <SkeletonDots style={{ marginTop: '10px' }}>
          <div />
          <div />
          <div />
        </SkeletonDots>
      </SkeletonCard>
    );
  }

  return (
    <CardsWrapper>
      <CardItem>
        <CardContainer>
          <CardGroup>
            <CardTheme className={`_${theme}`}>
              <p>{theme}</p>
            </CardTheme>
            <CardBtn>
              <div />
              <div />
              <div />
            </CardBtn>
          </CardGroup>
          <CardTitle>{title}</CardTitle>
          <CardContent>
            <CardDate>
              <svg /* иконка календаря */ />
              <p>{date}</p>
            </CardDate>
          </CardContent>
        </CardContainer>
      </CardItem>
    </CardsWrapper>
  );
};

export default Card;




