import React, { useState, useContext } from 'react'

import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

import { SearchContext } from '../../../services/Search.context';

const SearchContainerStyle = styled.View`
  padding : 16px;
`;

export const SearchComponent = () => {
    const [searchKeyWord, setSearchKeyWord] = useState('');
    const { onSearch } = useContext(SearchContext);

    return (
        <SearchContainerStyle>
            <Searchbar
                placeholder='Search'
                value={searchKeyWord}
                onChangeText={(text) => { setSearchKeyWord(text); }}
                onSubmitEditing={() => { onSearch(searchKeyWord); }}
            />
        </SearchContainerStyle>
    )
}

