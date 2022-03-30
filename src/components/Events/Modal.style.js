import styled, { keyframes } from "styled-components";

const modalAnimation = keyframes`
0% { transform: translateY(-200vh); }
100% { transform: translateY(0); }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100000;
  height: 100%;
  width: 100vw;
`;

export const BackDrop = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  background-color: #00000012;
  backdrop-filter: blur(5px);
  animation: ${modalAnimation} 500ms forwards;
`;

export const Body = styled.div`
  margin: 3rem auto 1rem;
  padding: 10px;
  border-radius: 5px;
  /* background: radial-gradient(#202857, #141937) */
  /* background: url(/assets/images/modal_bg.webp); */
  background: rgb(14, 14, 14);
  background: linear-gradient(
    0deg,
    rgba(14, 14, 14, 1) 0%,
    rgba(11, 0, 16, 1) 15%,
    rgba(44, 0, 59, 1) 100%
  );
  background-size: cover;
  background-position: center;
  max-width: 90%;
  width: 1200px;
`;

export const Header = styled.div`
  display: flex;
  padding: 0 5px;

  .close {
    font-size: 2rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

export const Main = styled.div`
  padding: 20px 0;
  white-space: break-spaces;

  img {
    margin: auto;
    display: block;
    width: 500px;
    max-width: 90%;
    border-radius: 15px;
    box-shadow: 5px 5px 15px #00000066;
    transition: 300ms;

    &:hover {
      transform: scale(1.02);
    }
  }

  .title {
    margin-top: 1.5rem;
    font-size: 3.5rem;
    text-align: center;
  }

  .sub-title {
    font-size: 1.8rem;
    text-align: center;
  }

  .time-venue {
    padding: 0 1rem;
    text-align: center;
  }

  .horizontal {
    margin: 2rem auto 1rem;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  .social {
    padding: 1rem 0;
    display: flex;
    justify-content: space-evenly;
    font-size: 3rem;
  }

  .content {
    text-align: start;
    margin: 0 2rem;
    max-width: 80%;
    margin-top: 2rem;

    .basic {
      margin: 1rem 0;
    }

    .description {
    }

    .rules {
      margin-top: 2rem;

      ul {
        margin-top: 0.5rem;
        list-style: disc;
      }
    }

    .event-managers {
      margin-top: 2rem;

      ul {
        margin-top: 0.5rem;
        list-style: decimal;
        font-size: 1.2rem;

        li {
          margin-bottom: 0.5rem;
        }

        a {
          color: skyblue;
          text-decoration: none;
        }
      }
    }

    button {
      border: none;
      outline: none;
      margin-top: 2rem;
      padding: 10px 20px;
      border-radius: 2px;
      background-color: #ff5722;
      color: white;

      &:hover {
        cursor: pointer;
        transform: scale(1.02);
      }
    }
  }
  @media screen and (max-width: 700px) {
    .content {
      margin: 0 1rem;
      max-width: 100%;
    }
  }
`;

export const Footer = styled.div``;
