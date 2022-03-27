import dayjs from "dayjs";
import { useState } from "react";
import styled from "styled-components";
import Image from "../Image";
import Modal from "./Modal";

export default function Card({ event }) {
  const [visible, setVisible] = useState(false);

  const {
    name,
    summary,
    start_date,
    poster = "https://backend.springspree22.in/static/ss22.jpeg",
  } = event;
  return (
    <div>
      <Modal
        visible={visible}
        event={event}
        onClose={() => setVisible(false)}
      />
      <Container>
        <div>
          <Image src={poster} alt="poster" />
        </div>
        <div className="content">
          <h1 className="title">{name}</h1>
          <h2 className="sub-title">{summary}</h2>
          {/* <p className="tagline">{tagline}</p> */}
        </div>
        <div className="footer">
          <div className="date">
            {start_date && dayjs(start_date).format("ddd, MMM D, YYYY h:mm A")}
          </div>
          <div>
            <button className="btn" onClick={() => setVisible(true)}>
              Read More
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  margin: auto;
  /* max-width: 400px; */
  max-width: 85%;
  min-height: 450px;
  border-radius: 10px;
  background: radial-gradient(#ffa865, #ff730e);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: 300ms;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    object-position: top;
  }

  .content {
    padding: 10px;
    text-align: center;

    .title {
      font-weight: 700;
    }

    .sub-title {
      font-size: 1rem;
      font-weight: 700;
    }

    .tagline {
      /* margin-top: 0.5rem; */
      margin: 0;
      font-size: 1.2rem;
    }
  }

  .footer {
    padding: 10px;
    margin-top: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: #e91e63;
      border-radius: 5px;
      border: 2px solid #ff6499;

      &:hover {
        filter: brightness(1.1);
      }
    }

    .date {
      font-size: 0.8rem;
      font-weight: 600;
    }
  }

  &:hover {
    transform: scale(1.01);
  }

  @media screen and (min-width: 700px) {
    min-width: 330px;
  }
`;
