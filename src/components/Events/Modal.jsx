import styled, { keyframes } from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Modal({
  image = "https://incident.nitk.ac.in/assets/img/Promenade.jpg",
  title = "Promenade",
  subTitle = "Hip Hop Internationals South India Auditions",
  time = "6th March, 9AM onwards",
  venue = "Silver Jubilee Auditorium",
  description = "Sure your squad can be the Kings of dance-offs? Incident presents Promenade in association with Hip Hop International India which is our flagship group-dance event on the 6th of March 2022. Suit up and dance your soles off to achieve hip-hop glory!",
  onSubmit,
  onClose,
  visible = true,
}) {
  if (!visible) return null;

  return (
    <Container>
      <BackDrop>
        <Body>
          <Header>
            <AiOutlineCloseCircle onClick={onClose} className="close" />
          </Header>
          <Main>
            <img src={image} alt="event-poster" />

            <div>
              <h1 className="title">{title}</h1>
              <h2 className="sub-title">{subTitle}</h2>

              <p className="time">{time}</p>
              <p className="venue">
                <FaMapMarkerAlt /> {venue}
              </p>

              <div className="horizontal">
                <div>
                  <h2>Price</h2>
                  <div>₹ 100</div>
                </div>
                <div>
                  <h2>No. of rounds</h2>
                  <div>5</div>
                </div>
                <div>
                  <h2>Prize money</h2>
                  <div>₹ 100</div>
                </div>
              </div>

              <div className="content">
                <div className="description">
                  <h2>Description</h2>
                  <p>{description}</p>
                </div>

                <div className="rules">
                  <h2>Rule Book</h2>
                  <ul>
                    <li>
                      During the event, the vocalist may be accompanied by (at
                      maximum) one instrumentalist which means at maximum one
                      instrumentis allowed per performance. You need to perform
                      two songs.
                    </li>
                    <li>
                      Performers will have 10 minson stage(including setup and
                      soundcheck).
                    </li>
                    <li>
                      You must bring your own instrumentsand cables. (technical
                      support will be provided in case of any emergency).
                    </li>
                    <li>NO backing tracks allowed.</li>
                    <li>
                      Pedalling, looping, drumming is strictly prohibited.
                    </li>
                  </ul>
                </div>

                <div className="event-managers">
                  <h2>Event Managers</h2>
                  <ul>
                    <li>
                      <div>Naman</div>
                      <div>
                        Contact No.:
                        <a href="tel:+918349352254">+918349352254</a>
                      </div>
                    </li>
                    <li>
                      <div>Naveet</div>
                      <div>
                        Contact No.:
                        <a href="tel:+918243352254">+918349352254</a>
                      </div>
                    </li>
                  </ul>
                </div>

                <button onClick={onSubmit}>Register</button>
              </div>
            </div>
          </Main>
          <Footer></Footer>
        </Body>
      </BackDrop>
    </Container>
  );
}

const modalAnimation = keyframes`
  0% { transform: translateY(-200vh); }
  100% { transform: translateY(0); }
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
`;

const BackDrop = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: auto;
  background-color: #00000012;
  backdrop-filter: blur(5px);
  animation: ${modalAnimation} 1s forwards;
`;

const Body = styled.div`
  margin: 6rem auto 1rem;
  padding: 10px;
  border-radius: 5px;
  background: radial-gradient(#202857, #141937);
  max-width: 90%;
  width: 1200px;
`;

const Header = styled.div`
  display: flex;
  padding: 0 5px;

  .close {
    font-size: 2rem;
    margin-left: auto;
    cursor: pointer;
  }
`;

const Main = styled.div`
  padding: 20px 0;
  text-align: center;

  img {
    margin: auto;
    display: block;
    width: 500px;
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
  }

  .sub-title {
    font-size: 1.8rem;
  }

  .time {
    margin-top: 1rem;
    font-size: 1.5rem;
  }

  .venue {
    font-size: 1.2rem;
  }

  .horizontal {
    margin: 2rem auto 1rem;
    max-width: 80%;
    display: flex;
    justify-content: space-between;
    font-size: 1.2rem;
  }

  .content {
    text-align: start;
    margin: auto;
    max-width: 80%;
    margin-top: 2rem;

    .description {
    }

    .rules {
      margin-top: 2rem;

      ul {
        margin-top: 0.5rem;
        margin-left: 1rem;
        list-style: decimal;
      }
    }

    .event-managers {
      margin-top: 2rem;

      ul {
        margin-top: 0.5rem;
        margin-left: 1rem;
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
`;

const Footer = styled.div``;
