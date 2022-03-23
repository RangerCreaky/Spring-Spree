import styled from "styled-components";
import Image from "../Image";

export default function Card({
  image = "https://incident.nitk.ac.in/assets/img/Promenade.jpg",
  title = "Promenade",
  subTitle = "Hip Hop Internationals South India Auditions",
  // tagline = "A coordination to cadence",
  date = "6 March",
  onClick,
}) {
  return (
    <Container>
      <div>
        <Image src={image} alt="poster" />
      </div>
      <div className="content">
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        {/* <p className="tagline">{tagline}</p> */}
      </div>
      <div className="footer">
        <div className="date">{date}</div>
        <div>
          <button className="btn" onClick={onClick}>
            Read More
          </button>
        </div>
      </div>
    </Container>
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
      font-size: 1.2rem;
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
