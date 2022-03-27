import { Fragment } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { Header, BackDrop, Body, Container, Footer, Main } from "./Modal.style";
import Image from "../Image";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import dayjs from "dayjs";
// import dayjs from "dayjs";

export default function Modal({ event, onClose, visible = false }) {
  const {
    poster,
    name,
    summary,
    venue,
    description,
    event_manager,
    registration_fee,
    rounds,
    prize_money,
    no_of_prizes,
    social_media,
    structure,
    rules,
    judging_criteria,
    start_date,
    end_date,
    registered_users = [],
  } = event;
  const { user } = useAuth();
  const navigate = useNavigate();
  const eventPayment = useEventPayment();

  const handleRegister = async () => {
    if (!user) {
      return navigate("/login", { replace: true, state: { from: "/events" } });
    }

    const payment = await eventPayment.makePayment({ event });
    if (payment) {
      alert("Payment successfull!");
    }
  };

  const registered = !!registered_users.find((u) => u._id === user?._id);

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

                <div className="d-md-flex justify-content-between align-items-center time-venue">
                  <div className="time">
                    <div>
                      Start:{" "}
                      {start_date &&
                        dayjs(start_date).format("ddd, MMM D, YYYY h:mm A")}
                    </div>
                    <div>
                      End:{" "}
                      {end_date &&
                        dayjs(end_date).format("ddd, MMM D, YYYY h:mm A")}
                    </div>
                  </div>
                  <div className="venue">
                    <FaMapMarkerAlt /> {venue}
                  </div>
                  <div className="venue">Fees: ₹{registration_fee}</div>
                </div>
              </div>
              <hr />
              <div className="content">
                <div className="basic row g-0">
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>Rounds:</strong>
                      </div>
                      <div className="col-9">{rounds}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>Prize money:</strong>
                      </div>
                      <div className="col-9">₹{prize_money}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>No. of prize(s):</strong>
                      </div>
                      <div className="col-9">{no_of_prizes}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>Judging Criteria:</strong>
                      </div>
                      <div className="col-9">{judging_criteria}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>Structure:</strong>
                      </div>
                      <div className="col-9">{structure}</div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="row g-0">
                      <div className="col-3">
                        <strong>Social Media:</strong>
                      </div>
                      <div className="col-9">{social_media}</div>
                    </div>
                  </div>
                </div>

                <div className="description">
                  <h2>Description</h2>
                  <p>{description || "No data"}</p>
                </div>

                {rules && (
                  <div className="rules">
                    <h2>Rule Book</h2>
                    <ul>
                      {rules.split("\n").map((rule) => (
                        <li key={rule}>{rule}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="event-managers">
                  <h2>Event Managers</h2>
                  <ul>
                    {event_manager
                      ? event_manager.split("\n").map((manager) => {
                          const [name, mobile] = manager.split(",");
                          return (
                            <Fragment key={manager}>
                              <div>{name}</div>
                              <div>
                                Contact No.:
                                <a href={`tel:${mobile}`}>{mobile}</a>
                              </div>
                            </Fragment>
                          );
                        })
                      : "No data"}
                  </ul>
                </div>
                {registered ? (
                  <button disabled>Already registered</button>
                ) : (
                  <button onClick={handleRegister}>Register</button>
                )}
              </div>
            </div>
          </Main>
          <Footer></Footer>
        </Body>
      </BackDrop>
    </Container>
  );
}
