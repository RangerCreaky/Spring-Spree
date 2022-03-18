import { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import CardContainer from "./CardContainer";
import CardTemp from "./CardTemp";
import Modal from "./Modal";

const events = Array(10)
  .fill(0)
  .map((_, id) => ({
    id,
    image: "https://incident.nitk.ac.in/assets/img/Promenade.jpg",
    title: "Promenade",
    subTitle: "Hip Hop Internationals South India Auditions",
    tagline: "A coordination to cadence",
    venue: "Silver Jubilee Auditorium",
    date: "6 March",
    time: "6th March, 9AM onwards",
    description:
      "Sure your squad can be the Kings of dance-offs? Incident presents Promenade in association with Hip Hop International India which is our flagship group-dance event on the 6th of March 2022. Suit up and dance your soles off to achieve hip-hop glory!",
  }));

const events_data = {
  "Publicity and Relations": events,
  "Quality Control and Management ": events,
  "Web development ": events,
  "Event coordination and conduction": events,
  Proshows: events,
  "Sponsorship ": events,
  "Treasury and pricing ": events,
  "Content and blogging": events,
  Hospitality: events,
  "Logistics and Security": events,
  "Design and Deco": events,
};

export default function Events() {
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState(
    ["All", "day 1", "day 2", "day 3"].map((e, i) => ({
      key: e,
      active: i === 0,
    }))
  );

  const changeFilter = (k) => () => {
    setFilter(
      filter.map(({ key }) =>
        key === k ? { key, active: true } : { key, active: false }
      )
    );
  };

  return (
    <>
      <Modal visible={modalVisible} onClose={() => setModalVisible(false)} />
      <Container>
        <div className="left">
          <img src="/assets/images/logo.webp" alt="logo" />
          <h1>Events</h1>
          <ul className="events">
            {Object.keys(events_data).map((key) => (
              <li key={key}>
                <a href={`#${key}`}>{key}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right">
          <div className="filter">
            {filter.map(({ key, active }) => (
              <button
                onClick={changeFilter(key)}
                className={active ? "btn active" : "btn"}
                key={key}
              >
                {key}
              </button>
            ))}
          </div>

          <div>
            {Object.keys(events_data).map((key, i) => (
              <div id={key} key={key} className="section">
                <h1 className="event-title">{key}</h1>
                <div className="card-holder">
                  {events_data[key].map(
                    ({ id, title, subTitle, image, tagline }) => (
                      <CardTemp
                        key={id}
                        image={image}
                        title={title}
                        subTitle={subTitle}
                        tagline={tagline}
                        onClick={() => setModalVisible(true)}
                      />
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
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
    overflow: auto;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 200px;
    }

    h1 {
      margin: 10px 0;
      font-size: 2.5rem;
      text-transform: uppercase;
    }

    .events {
      list-style: none;
      font-size: 1.5rem;
      text-align: center;

      li {
        padding: 5px 0;
      }

      a {
        text-decoration: none;
        color: white;
      }

      a.active {
        color: #ec9e3b;
      }
    }
  }

  .right {
    flex: 0 0 70%;
    width: 70%;
    height: 100%;
    overflow: auto;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      display: none;
    }

    .filter {
      display: inline-block;
      background-color: #171717;
      box-shadow: 0 3px #ffffff13;
      border-radius: 5rem;

      button {
        font-size: 1rem;
        padding: 10px 25px;
        border-radius: 5rem;
        margin: 0;

        &.active {
          background: #ec9e3b;
        }

        &:hover:not(.active) {
          background-color: #ec9e3b45;
        }
      }
    }

    .section {
      margin-top: 2rem;

      .event-title {
        font-size: 3rem;
        text-align: center;
        margin: 1rem 0;
      }

      .card-holder {
        padding: 10px 5px;
        display: flex;
        overflow: auto;

        /* &::-webkit-scrollbar {
          display: none;
        } */
      }
    }
  }
`;
