import React from 'react';
import styled from 'styled-components';

const SideBarGallery  =()=>{
  return(
    <SidebarContainer>
      <ul>
        <li> <a href='#0'> Inaguration </a> </li>
        <li> <a href='#1'> Allure </a> </li>
        <li> <a href='#2'> Pro shows </a> </li>
        <li> <a href='#3'> Social </a> </li>
        <li>  <a href='#4'> Events </a> </li>
      </ul>
    </SidebarContainer>
  )
}

export default SideBarGallery;
const SidebarContainer = styled.div`
  margin-right : 20px;
  position : fixed;
  top : 100px;
  left : 0;
  z-index : 1000;
  padding : 1rem;
  width : 15rem;

  > ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    > li{

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
