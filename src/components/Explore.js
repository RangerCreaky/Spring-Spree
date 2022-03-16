import React from 'react';
import styled from 'styled-components';

const Explore = ()=>{
    return(
        <ExploreContainer>
            <div> Hello world </div>
        </ExploreContainer>
    );
}

export default Explore;

const ExploreContainer = styled.div`
    &:before {
        content : "";
        width : 100vw;
        height : 100vh;
        background-color : orange;
    }
    margin-top : 72px;
    height : calc(100vh - 72px);
    background-image : url("../../images/logo-light.png");
    background-repeat : no-repeat;
    background-position : center;
`;
