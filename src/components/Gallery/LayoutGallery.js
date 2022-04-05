import React from "react";
import styled from "styled-components";

import SideBarGallery from "./SideBarGallery.js";
import MainContent from "./MainContent.js";
import { useTitle } from "../../hooks/document.js";

const LayoutGallery = () => {
  useTitle("Gallery - SpringSpree'22");
  return (
    <GalleryContainer>
      <SideBarGallery />
      <GalleryInnerContainer>
        <MainContent />
      </GalleryInnerContainer>
    </GalleryContainer>
  );
};

export default LayoutGallery;

const GalleryContainer = styled.div``;

const GalleryInnerContainer = styled.div`
  /* margin-top : 100px; */
  display: flex;
  margin-bottom: 50px;
`;
