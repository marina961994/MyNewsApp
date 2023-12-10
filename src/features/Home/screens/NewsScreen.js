import React, { useState, useEffect, useContext } from 'react';

import { SafeAreaComponent } from '../../../utils/safe-area.component';
import { SearchComponent } from '../components/Search.component';
import { NewsList } from '../components/NewsList.component';
import { ErrorTextComponent } from '../components/ErrorText.component';

import { useApi } from '../../../hooks/useApi';
import { SearchContext } from '../../../services/Search.context';


export const NewsScreen = ({ navigation }) => {
    const { articles, isLoading, error } = useApi();
    const { AddArticleList, filteredList } = useContext(SearchContext);
    const [newsListData, setNewsListData] = useState([]);

    useEffect(() => {
        AddArticleList(articles);
        setNewsListData(articles);
    }, [articles]);

    useEffect(() => {
        setNewsListData([]);
        setNewsListData(filteredList);
    }, [filteredList]);

    if (error) {
        return <ErrorTextComponent errorMessage={error} />;
    }

    return (
        <SafeAreaComponent>
            <SearchComponent />
            {newsListData && <NewsList
                newsData={newsListData}
                navigation={navigation}
                isLoading={isLoading}
            />}
        </SafeAreaComponent>
    )
}

