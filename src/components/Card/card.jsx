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

const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const dateObj = new Date(isoDate);
  return dateObj.toLocaleDateString("ru-RU");
};

const Card = ({ title, category, date, loading }) => {
  if (loading || !title) {
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

  const safeCategory = category ? category.toLowerCase() : 'default';

  return (
    <CardsWrapper>
      <CardItem>
        <CardContainer>
          <CardGroup>
            <CardTheme className={`_${safeCategory}`}>
              <p>{category || 'Без категории'}</p>
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
              <img src="/images/calendar-clear-outline.svg" alt="calendar icon" />
              <p>{formatDate(date)}</p>
            </CardDate>
          </CardContent>
        </CardContainer>
      </CardItem>
    </CardsWrapper>
  );
};

export default Card;










