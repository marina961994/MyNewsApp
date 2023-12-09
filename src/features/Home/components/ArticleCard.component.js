import styled from "styled-components/native";
import { Card } from 'react-native-paper';

const ArticleCardView = styled(Card)`
  background-color : white;
  margin-bottom : 8px;
`;

const Info = styled.View`
  padding : 16px;
  flex-direction : row;
  align-items : center;
`;

const ArticleImage = styled.Image`
  width : 70px;
  height : 70px;
`;

const ArticleTitle = styled.Text`
  padding : 16px;
  align-items : center;
  margin-right : 45px;
`;

export const ArticleCard = ({ article }) => {
  const {
    id = '11edc52b-2918-4d71-9058-f7285e29d894',
    title = 'hello',
    description = '',
    imageUrl = 'https://media.wired.com/photos/6570f827531dc064151e617f/191:100/w_1280,c_limit/Gadget-Lab-Podcast--Blue-Bubble-Green-Bubble-Gear-GettyImages-1318720514.jpg'
  } = article;

  return (
    <ArticleCardView elevation={5}>
      <Info>
        <ArticleImage source={{ uri: imageUrl }} />
        <ArticleTitle variant="label">{title}</ArticleTitle>
      </Info>
    </ArticleCardView>
  );
}