import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  .wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    margin: 0;
    padding: 0;
  }
  .img-box {
    position: absolute;
    padding: 0;
    margin: 0;
  }
  .box-1 {
    top: 25px;
    left: 25px;
    width: 150px;
    height: 150px;
    animation: rotate 1.5s infinite linear;
  }
  .box-2 {
    top: 45px;
    left: 45px;
    width: 110px;
    height: 110px;
    animation: rotate 1.5s infinite linear reverse;
  }
  .box-3 {
    top: 25px;
    left: 25px;
    width: 150px;
    height: 150px;
  }
  .box-4 {
    width: 130px;
    height: 130px;
    top: 35px;
    left: 35px;
  }
  img {
    width: 100%;
    height: 100%;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
