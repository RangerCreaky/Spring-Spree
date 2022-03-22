import React from 'react';
import Part from './Part';
import styled from 'styled-components';

import imageArr from './imageData';    


const MainContent = ()=>{

  const renderImages = ()=>{
    return(
      imageArr.map((img , index)=>{
        const {name , arr} = img
        return(
          <Part key={index} arr={arr} name={name} ide={index}/>
        );
      })
    )
  }
  return(
    <MainContentContainer>
      {renderImages()}
    </MainContentContainer>
  )
}

export default MainContent;
const MainContentContainer = styled.div`
  display : flex;
  flex-direction : column;
  justify-content : center;
  width : 100%;
  position : relative;
`;
