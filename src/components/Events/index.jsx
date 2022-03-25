import { useEffect, useState } from "react";
import styled from "styled-components";
import eventApi from "../../api/events";
import { useApi } from "../../hooks/api";
import Loader from "../Loader";

import DayFilter from "./DayFilter";
import Section from "./Section";
import _ from "lodash";
import RegisterAndPay from "../../utils/Register";
import { useAuth } from "../../hooks/auth";

const days_data = [
  ["All", null],
  ["Day 1", "8"],
  ["Day 2", "9"],
  ["Day 3", "10"],
].map((el, i) => ({
  key: el[0],
  date: el[1],
  active: i === 0,
}));

export default function Events() {
  const { request, loading, data } = useApi(eventApi.getAllEvents);
  const [filters, setFilters] = useState(days_data);
  const {user} = useAuth();

  const changeFilter = (k) => () => {
    setFilters(
      filters.map(({ key }) =>
        key === k ? { key, active: true } : { key, active: false }
      )
    );
  };
  const onClick = async () => {
    const event = {
      _id : "623c349874264a5c12781c51",
      name : "Spring Spree 22 Entry",
      registration_fee : 2000,
      poster : "https://backend.springspree22.in/static/ss22.jpeg"
    }
    await RegisterAndPay({user,event});
  };

  const onSubmit = async () => {
    // const token = await storage.getData("token");
    const token = "njbjj";
    console.log(token);
    await fetch("http://localhost:3000/sendMail", {
      // mode: 'no-cors',
      method: "GET",
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    .then((o) => {
      console.log(o);
      alert(o.message);
    })
    .catch((e) => {
      // console.log(e);
      console.error(e);
    });
  };

  useEffect(() => {
    request();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const parsedEvents = _.groupBy(data, (el) => el.category ?? "Other");
  const categories = Object.keys(parsedEvents);

  var PayEntryFee;

  if(user && user.isAllowed === 0){
    // console.log(user);
    PayEntryFee = <div>
      <button className="btn" onClick={async () => {
        await onClick();
        PayEntryFee = <div></div>
      }}>
        Pay Entry Fee
      </button>
    </div>
  }
  else{
    PayEntryFee = <div></div>
  }

  var verifyEmail;

  if(user && user.isVerified !== 0){
    verifyEmail = <div>
      <button className="btn" onClick={() => {
        onSubmit();
        PayEntryFee = <div></div>
      }}>
        Verify Email
      </button>
    </div>
  }
  else{
    verifyEmail = <div></div>
  }

  // console.log("origin", data);
  // console.log("parsed", parsedEvents);

  return (
    <>
      <Loader loading={loading} />
      <Container className="row g-0">

        { PayEntryFee }
        { verifyEmail }
        
        <div className="left col-12 col-lg-4">
          <img src="/assets/images/logo.webp" alt="logo" />
          <h1>Events</h1>
          <DayFilter filters={filters} onChange={changeFilter} />
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

// const dummyEvent = [
//   {
//     _id: "62358c754dc1c6a40b8c01b9",
//     name: "quiz",
//     venue: "audi",
//     summary: "new event",
//     event_manager: "quiz club",
//     registration_fee: 10,
//     rounds: 2,
//     prize_money: 2000,
//     no_of_prizes: 2,
//     social_media: "insta:nnn",
//     description: "hello",
//     structure: "12",
//     rules: "no rules",
//     judging_criteria: "cjksdbjk",
//     poster: "localhost:3000/static/download.jpg.jpg",
//     start_date: "2022-03-18T00:00:00.000Z",
//     end_date: "2022-03-20T00:00:00.000Z",
//     registered_users: [
//       {
//         _id: "62357d607895e039d663b56b",
//         name: "harsh",
//         email: "harsh@gmail.com",
//         mobile: "2999395",
//       },
//     ],
//     createdAt: "2022-03-19T07:55:33.863Z",
//     updatedAt: "2022-03-19T08:02:24.956Z",
//     category: "test",
//     __v: 1,
//   },
// ];
