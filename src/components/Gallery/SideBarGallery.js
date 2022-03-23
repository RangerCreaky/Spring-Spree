import React from 'react';
import styled from 'styled-components';

const SideBarGallery  =()=>{
  return(
    <SidebarContainer>
      <ul>
        <li> <a href='#0'> Pro shows </a> </li>
        <li> <a href='#1'> Allure </a> </li>
        <li> <a href='#2'> Spotlights </a> </li>
        <li> <a href='#3'> Inauguration </a> </li>  
        <li> <a href='#4'> Social Activities </a> </li>
        <li> <a href='#5'> Events </a> </li>
        <li> <a href='#6'> Adventures </a> </li>
      </ul>
    </SidebarContainer>
  )
}

export default SideBarGallery;
const SidebarContainer = styled.div`
  margin-right : 20px;
  position : fixed;
  top : 80px;
  left : 0;
  z-index : 1000;
  padding : 0 1rem;
  width : 15rem;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-family: cursive;
  font-weight : 800;

  > ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > li{
        margin: 15px 0;
        list-style: none;

        > a{
          text-decoration: none;
          color: white;

          &:hover{
            color : orange
          }
        }
    }
  }

  @media (max-width : 700px){
    display: none;
  }
`;
