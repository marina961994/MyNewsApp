import React from 'react'
import { FlatList, Pressable } from 'react-native';
import { ActivityIndicator, MD2Colors } from 'react-native-paper';

import styled from 'styled-components/native';

import { ArticleCard } from './ArticleCard.component';

const ListContainer = styled.View`
  flex : 1;
`;

const NewsListView = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 16
    }
})``;

const LoadingContainer = styled.View`
  position : absolute;
  top : 50%;
  left : 50%;
`;

const Loading = styled(ActivityIndicator)`
  margin-left : -25px;
`;

export const NewsList = ({ newsData, navigation, isLoading }) => {
    return (
        <>
            <ListContainer >
                <NewsListView
                    data={newsData}
                    renderItem={({ item }) => {
                        return (
                            <Pressable
                                onPress={() => navigation.navigate("NewsDetails", { article: item })}>
                                <ArticleCard article={item} />
                            </Pressable>
                        );
                    }}
                    keyExtractor={item => item.id}
                />
            </ListContainer>

            {isLoading && (
                <LoadingContainer>
                    <Loading size={50} animating={true} color={MD2Colors.red800} />
                </LoadingContainer>
            )}
        </>
    )
}
