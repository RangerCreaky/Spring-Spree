import { useState } from "react";
import styled from "styled-components";

import DayFilter from "./DayFilter";
import Section from "./Section";

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
  "Event coordination and conduction": events,
  Proshows: events,
  "Treasury and pricing": events,
  "Content and blogging": events,
};

export default function Events() {
  const [filters, setFilters] = useState(
    ["All", "day 1", "day 2", "day 3"].map((e, i) => ({
      key: e,
      active: i === 0,
    }))
  );

  const changeFilter = (k) => () => {
    setFilters(
      filters.map(({ key }) =>
        key === k ? { key, active: true } : { key, active: false }
      )
    );
  };

  return (
    <>
      <Container className="row g-0">
        <div className="left col-12 col-lg-4">
          <img src="/assets/images/logo.webp" alt="logo" />
          <h1>Events</h1>
          <DayFilter filters={filters} onChange={changeFilter} />
          <ul className="events">
            {Object.keys(events_data).map((key) => (
              <li key={key}>
                <a href={`#${key}`}>{key}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right col-12 col-lg-8">
          <div>
            {Object.keys(events_data).map((title) => (
              <Section key={title} title={title} events={events_data[title]} />
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

  .left {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;

    &::-webkit-scrollbar {
      display: none;
    }

    img {
      width: 200px;
    }

    h1 {
      font-size: 2.5rem;
      font-family: "signatra";
      text-transform: uppercase;
      background: -webkit-linear-gradient(90deg, #fb3981 0%, #fdbb2d 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .events {
      list-style: none;
      font-size: 1.2rem;
      text-align: center;

      a {
        text-decoration: none;
        color: white;

        &:hover {
          color: #ec9e3b;
        }

        &.active {
          color: #ec9e3b;
        }
      }
    }
  }

  .right {
    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and (min-width: 992px) {
    .right,
    .left {
      height: 100%;
      overflow: auto;
      scroll-behavior: smooth;
    }

    .left .events {
      text-align: start;
    }
  }
`;
