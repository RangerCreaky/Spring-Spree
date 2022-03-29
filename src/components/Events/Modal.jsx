import { Fragment } from "react";

import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaMapMarkerAlt, FaFacebook, FaInstagram } from "react-icons/fa";
import { Header, BackDrop, Body, Container, Footer, Main } from "./Modal.style";
import Image from "../Image";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { useEventPayment } from "../../hooks/payment";
import Loader from "../Loader";
import dayjs from "dayjs";
import { useApi } from "../../hooks/api";
import eventApi from "../../api/events";
// import dayjs from "dayjs";

const SocialIcon = ({ type, ...args }) => {
  switch (type) {
    case "facebook":
      return <FaFacebook {...args} />;

    case "instagram":
      return <FaInstagram {...args} />;

    default:
      return null;
  }
};

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
    rules,
    judging_criteria,
    start_date,
    end_date,
    registered_users = [],
  } = event;
  const { user } = useAuth();
  const navigate = useNavigate();
  const eventPayment = useEventPayment();
  const registerFree = useApi(eventApi.registerFree);

  const handleRegister = async () => {
    if (!user) {
      return navigate("/login", { replace: true, state: { from: "/events" } });
    }

    if (registration_fee === 0) {
      const res = await registerFree.request(event._id);
      if (res.ok) {
        window.alert("You have registered successfully for this event");
      } else {
        window.alert("Something went wrong!");
      }
      return;
    }

    const payment = await eventPayment.makePayment({ event });
    if (payment) {
      alert("Payment successfull!");
    }
  };

  const registered = !!registered_users.find((u) => u._id === user?._id);
  const loading = eventPayment.loading || registerFree.loading;

  if (!visible) return null;
  return (
    <Container>
      <Loader loading={loading} />
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
                  <div className="venue">
                    Registration Fees:{" "}
                    {registration_fee !== 0 ? `₹${registration_fee}` : "Free"}
                  </div>
                </div>
              </div>
              {social_media && (
                <div className="social">
                  {social_media.split("\n").map((social) => {
                    const [type, link] = social.split(",");
                    return (
                      <a
                        target="_blank"
                        rel="noreferrer"
                        key={social}
                        href={link}
                      >
                        <SocialIcon type={type} />
                      </a>
                    );
                  })}
                </div>
              )}
              <hr />
              <div className="content">
                <div>
                  <h2>
                    Rounds: <span>{rounds}</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    Prize Money: <span>{prize_money}</span>
                  </h2>
                </div>
                <div>
                  <h2>
                    No. of prize(s): <span>{no_of_prizes}</span>
                  </h2>
                </div>
                <div>
                  <h2>Judgin Criteria</h2>
                  <p>{judging_criteria || "No data"}</p>
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
