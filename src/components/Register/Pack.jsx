import React from "react";
import styled from "styled-components";

export default function Pack({ name, amount, onClick }) {
  const names = name?.split(",") || [];

  return (
    <PackStyled>
      <Type>
        <ul>
          {names.map((e, i) => {
            if (i === names.length - 1) return <li key={e}>{e}</li>;

            return (
              <React.Fragment key={e}>
                <li>{e}</li>
                <li>+</li>
              </React.Fragment>
            );
          })}
        </ul>
      </Type>
      <ButtonContainer>
        <span>{amount}/-</span>
        <button className="btn btn-primary" onClick={onClick}>
          Pay
        </button>
      </ButtonContainer>
    </PackStyled>
  );
}

const PackStyled = styled.div`
  max-width: 400px;
  width: 330px;
  min-width: 250px;
  min-height: 250px;
  padding: 20px;
  background: rgba(255, 2255, 255, 0.9);
  background-image: url("/images/springspree22_74.png");
  background-size: cover;
  background-position: center;
  backdrop-filter: blur(5px);
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  margin: 20px;
`;

export const Type = styled.div`
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  padding: 20px;
  height: 150px;
  border-radius: 15px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.25);
  > ul {
    height: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  > ul > li {
    margin: 1px auto;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-top: 20px;
  > span {
    pointer-events: none;
    border: 2px solid #ffa500;
    padding: 8px 15px;
    border-radius: 10px;
    background: #000000;
    margin-right: 10px;
    flex: 1;
    text-align: center;
  }

  > button {
    background: rgba(255, 165, 0, 1);
    color: white;
  }
`;
