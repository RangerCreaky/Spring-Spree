import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Header, BackDrop, Body, Container, Footer, Main } from "./Modal.style";
import Image from "../Image";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
// import dayjs from "dayjs";

export default function Modal({ event, onClose, visible = false }) {
  const {
    poster,
    name,
    summary,
    time,
    venue,
    description,
    // event_manager,
    // registration_fee,
    // rounds,
    // prize_money,
    // no_of_prizes,
    // social_media,
    // structure,
    // rules,
    // judging_criteria,
    // start_date,
    // end_date,
  } = event;
  const { user } = useAuth();
  const navigate = useNavigate();
  const eventPayment = useEventPayment();
  // console.log(dayjs(start_date));

  const handleRegister = async () => {
    if (!user) {
      return navigate("/login", { replace: true, state: { from: "/events" } });
    }

    const payment = await eventPayment.makePayment({ event });
    if (payment) {
      alert("Payment successfull!");
    }
  };

  if (!visible) return null;
  return (
    <Container>
      <Loader loading={eventPayment.loading} />
      <BackDrop>
        <Body>
          <Header>
            <AiOutlineCloseCircle onClick={onClose} className="close" />
          </Header>
          <Main>
            <Image src={poster} alt="event-poster" />

            <div>
              <div className="main">
                <h1 className="title">{name}</h1>
                <h2 className="sub-title">{summary}</h2>

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
                <button onClick={handleRegister}>Register</button>
              </div>
            </div>
          </Main>
          <Footer></Footer>
        </Body>
      </BackDrop>
    </Container>
  );
}
