import React, { useState, useEffect, createContext } from 'react'

export const SearchContext = createContext();

export const SearchContextProvider = ({ children }) => {
    const [keyWord, setKeyWord] = useState('');
    const [articleList, setArticleList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);

    const AddArticleList = (articleList) => {
        if (articleList) {
            setArticleList(articleList);
        }
    }

    const onSearch = (searchKeyWord) => {
        setKeyWord(searchKeyWord);
    }

    useEffect(() => {
        if (articleList) {
            if (!keyWord.length) {
                setFilteredList([]);
                setFilteredList(articleList)

            } else {
                const filteredData = articleList.filter(item => item.title.startsWith(keyWord));
                setFilteredList([]);
                setFilteredList(filteredData);
            }

        }

    }, [keyWord]);

    return (
        <SearchContext.Provider
            value={{
                AddArticleList,
                onSearch,
                filteredList
            }}>
            {children}
        </SearchContext.Provider>
    );
}

