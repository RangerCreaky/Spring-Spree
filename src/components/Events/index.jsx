import styled from "styled-components";
import Card from "./Card";
import CardContainer from "./CardContainer";
import CardTemp from "./CardTemp";

export default function index() {
  return (
    <Container>
      <div className="left">
        <img src="/assets/images/logo.webp" alt="logo" />
        <h1>Events</h1>
        <p>
          Outer Space Background · Nazar The Vis Azhar Follow. Love Run. Pen
          Editor Menu. Settings. Change View. Use Left Layout Use Top Layout Use
          Right Layout. Outer Space Background · Nazar The Vis Azhar Follow.
          Love Run. Pen Editor Menu. Settings. Change View. Use Left Layout Use
          Top Layout Use Right Layout.
        </p>
      </div>
      <div className="right">
        <div>
          <button className="active">All</button>
          <button>Day 1</button>
          <button>Day 2</button>
          <button>Day 3</button>
        </div>

        <div className="section">
          <h2>Cultural</h2>
          <div className="card-holder">
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
          </div>
        </div>
        <div className="section">
          <h2>Technical</h2>
          <div className="card-holder">
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
          </div>
        </div>
        <div className="section">
          <h2>Quizes</h2>
          <div className="card-holder">
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
            <CardTemp />
          </div>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  /* background-color: black; */
  padding: 90px 20px 0;
  display: flex;

  @media screen and (max-width: 900px) {
    flex-direction: column;

    .right {
      width: 100%;
    }
  }

  .left {
    flex: 0 0 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    h1 {
      margin: 10px 0;
      font-size: 2rem;
      text-transform: uppercase;
    }

    p {
      text-align: justify;
      padding: 10px;
    }

    img {
      width: 200px;
    }
  }

  .right {
    flex: 0 0 70%;
    width: 70%;
    height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    button {
      cursor: pointer;
      padding: 10px 20px;
      border: 1px solid #fcae3e;
      border-radius: 2px;
      background: none;
      outline: none;
      margin: 0 10px 10px 0;
      color: white;
      transition: 300ms;

      &:hover {
        background-color: #ffba56ed;
      }

      &.active {
        background-color: #fcae3e;
      }
    }

    .section {
      margin-top: 10px;
    }

    .card-holder {
      padding: 10px 5px;
      display: flex;
      overflow: auto;

      &::-webkit-scrollbar {
        display: none;
      }

      .card {
        min-width: 250px;
        height: 250px;
        margin-right: 10px;
        border-radius: 10px;
        border: 1px solid #515151;
        overflow: hidden;
        background: url(/assets/images/card_bg.jpg);
        background-position: center;
        background-size: cover;

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          transition: 500ms;
          opacity: 0;
          padding: 10px 10px;
          text-align: center;

          p {
            padding: 10px;
            font-size: 0.9rem;
            color: #c6c6c6;
          }

          button {
            background-color: #ff5722;
            border: none;
          }
        }

        &:hover {
          transform: scale(1.01);

          .content {
            background-color: #00000099;
            opacity: 1;
          }
        }
      }
    }
  }
`;
