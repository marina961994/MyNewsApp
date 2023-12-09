import React, { useState } from 'react'

import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';

const SearchContainerStyle = styled.View`
  padding : 16px;
`;

export const SearchComponent = () => {
    const [searchKeyWord, setSearchKeyWord] = useState('');

    return (
        <SearchContainerStyle>
            <Searchbar
                placeholder='Search'
                onChangeText={(text) => { setSearchKeyWord(text); }}
            />
        </SearchContainerStyle>
    )
}

