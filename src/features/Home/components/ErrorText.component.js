import React from 'react'
import styled from "styled-components/native";

const ErrorContainer = styled.View`
  margin-top : 70px;
  align-items : center;
`;
const ErrorMessage = styled.Text`
  padding : 16px;
  align-items : center;
  font-size : 20px;
  font-weight: bold;
  color: #e90909;
`;

export const ErrorTextComponent = ({ errorMessage }) => {
  return (
    <ErrorContainer>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </ErrorContainer>
  )
}


