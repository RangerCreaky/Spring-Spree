import { useEffect, useState } from "react";
import styled from "styled-components";
import eventApi from "../../api/events";
import { useApi } from "../../hooks/api";
import Loader from "../Loader";

import DayFilter from "./DayFilter";
import Section from "./Section";
import _ from "lodash";
import { useAuth } from "../../hooks/auth";
import { Link, Navigate } from "react-router-dom";
import ToastHolder from "../Toast/ToastHolder";
import Toast from "../Toast";
import { useEventPayment } from "../../hooks/payment";
import dayjs from "dayjs";

const days_data = [
  ["All", null],
  ["Day 1", 8],
  ["Day 2", 9],
  ["Day 3", 10],
].map((el, i) => ({
  key: el[0],
  date: el[1],
  active: i === 0,
}));

export default function Events() {
  const allEvents = useApi(eventApi.getAllEvents);
  const [filter, setFilter] = useState(days_data);
  const { user, updateUser } = useAuth();
  const eventPayment = useEventPayment();
  const currentFilter = filter.find((e) => e.active);

  const changeFilter = (k) => () => {
    setFilter(
      filter.map((e) =>
        e.key === k ? { ...e, active: true } : { ...e, active: false }
      )
    );
  };

  useEffect(() => {
    updateUser();
    allEvents.request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parsedEvents = _.groupBy(
    allEvents.data
      ?.filter(
        (e) =>
          !currentFilter.date ||
          dayjs(e.start_date).date() === currentFilter.date
      )
      ?.map((e) => ({
        ...e,
        registered: !!user.events.find((x) => x.event_id === e._id),
      }))
      ?.sort((a, b) => a.registered - b.registered),
    (el) => el.category ?? "Other"
  );
  const categories = Object.keys(parsedEvents);
  const loading = allEvents.loading || eventPayment.loading;

  if (user && user.isVerified !== 0)
    return <Navigate to="/verifyMail" state={{ from: "/events" }} />;

  return (
    <>
      <Loader loading={loading} />
      {user && (
        <ToastHolder>
          <Toast
            show={user.paidForEvent === 0}
            content={
              <div>
                Please pay your registration fees first to attend any event.
                <br />
                <br />
                <Link className="btn btn-primary" to="/register">
                  Pay
                </Link>
              </div>
            }
          />
        </ToastHolder>
      )}
      <Container className="row g-0">
        <div className="left col-12 col-lg-4">
          <img src="/assets/images/logo.webp" alt="logo" />
          <h1>Events</h1>
          <DayFilter filters={filter} onChange={changeFilter} />
          <ul className="events">
            {categories.map((category) => (
              <li key={category}>
                <a href={`#${category}`}>{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="right col-12 col-lg-8">
          <div>
            {categories.map((category) => (
              <Section
                key={category}
                title={category}
                events={parsedEvents[category]}
              />
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
      font-family: "Steinfeld";
      text-transform: uppercase;
      background: -webkit-linear-gradient(90deg, #fb3981 0%, #fdbb2d 100%);
      background-clip: text;
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

// sample
// const demo = {
//   _id: "623dc8c0031962fa39429061",
//   name: "dj night",
//   venue: "ts",
//   summary: "",
//   event_manager: "harsh",
//   registration_fee: 120,
//   rounds: null,
//   prize_money: "",
//   no_of_prizes: null,
//   social_media: "",
//   description: "dance",
//   structure: "",
//   rules: "",
//   judging_criteria: "",
//   category: "General",
//   poster: "https://backend.springspree22.in/static/ss22.jpeg",
//   start_date: null,
//   end_date: null,
//   registered_users: [
//     {
//       _id: "623c44b04c002888aa67d15f",
//       name: "Harsh Sonkusare",
//       email: "harshsonkusare01@gmail.com",
//       mobile: "8087732133",
//     },
//   ],
//   createdAt: "2022-03-25T13:50:56.032Z",
//   updatedAt: "2022-03-26T18:30:31.228Z",
//   __v: 1,
// };
