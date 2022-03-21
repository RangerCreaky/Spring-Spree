import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Header, BackDrop, Body, Container, Footer, Main } from "./Modal.style";

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
  user,
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
              <div className="main">
                <h1 className="title">{title}</h1>
                <h2 className="sub-title">{subTitle}</h2>

                <p className="time">{time}</p>
                <p className="venue">
                  <FaMapMarkerAlt /> {venue}
                </p>
              </div>

              <hr />

              <div className="basic">
                <div className="row g-0">
                  <div className="col-md-6 col-12">
                    <h3>Price: Rs.100</h3>
                  </div>
                  <div className="col-md-6 col-12">
                    <h3>Prize: Rs.200</h3>
                  </div>
                  <div className="col-md-6 col-12">
                    <h3>Prize: Rs.200</h3>
                  </div>
                  <div className="col-md-6 col-12">
                    <h3>Prize: Rs.200</h3>
                  </div>
                  <div className="col-md-6 col-12">
                    <h3>Prize: Rs.200</h3>
                  </div>
                  <div className="col-md-6 col-12">
                    <h3>Prize: Rs.200</h3>
                  </div>
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

                <button onClick={() => {onSubmit(user)}}>Register</button>
              </div>
            </div>
          </Main>
          <Footer></Footer>
        </Body>
      </BackDrop>
    </Container>
  );
}
