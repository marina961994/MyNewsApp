import React from 'react'

import styled from "styled-components/native";
import { Card } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';

import { SafeAreaComponent } from '../../../utils/safe-area.component'

const ArticleCard = styled(Card)`
  background-color : white;
  height : 260px;
  margin : 10px;
`;

const ArticleCardCover = styled(Card.Cover)`
  background-color : white;
  height : 260px;
  padding : 8px;
`;

const ArticleTitle = styled.Text`
  padding : 16px;
  align-items : center;
  font-size : 18px;
  font-weight: bold;
`;

const ArticleDescription = styled.Text`
  padding : 16px;
  align-items : center;
  font-size : 14px;
`;


export const NewsDetailsScreen = ({ route }) => {
  const { article } = route.params;
  const { colors } = useTheme();

  return (
    <SafeAreaComponent>
      <ArticleCard elevation={5}>
        <ArticleCardCover source={{ uri: article.imageUrl }} />
      </ArticleCard>

      <ArticleTitle style={{ color: colors.text }}>
        {article.title}
      </ArticleTitle>
      <ArticleDescription style={{ color: colors.text }}>
        {article.description}
      </ArticleDescription>

    </SafeAreaComponent>
  )
}
