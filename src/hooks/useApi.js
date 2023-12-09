import React, { useState, useEffect } from 'react'
import axios from 'axios';
import uuid from 'react-native-uuid';

export const useApi = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const getArticlesListData = async () => {
        setIsLoading(true);
        setArticles([]);

        try {
            const articlesUrl = 'https://newsapi.org/v2/everything?q=Apple&from=2023-12-01&sortBy=popularity&apiKey=4955ed0b3ee14c15a349dd122ffd559e';
            const response = await axios.get(articlesUrl);
            const articlesData = response.data.articles.map((article) => {
                return {
                    id: uuid.v4(),
                    title: article.title,
                    description: article.description,
                    imageUrl: article.urlToImage
                }
            });

            setArticles(articlesData);

        } catch (error) {
            setError(error);
            console.log(error.response)
        }

        setIsLoading(false);
    };

    useEffect(() => {
        getArticlesListData();
    }, [])

    return {
        articles,
        isLoading,
        error
    };
}

