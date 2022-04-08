import React from "react";
import styled from "styled-components";

export default function Close() {
  return (
    <Style>
      <p>Online registration is closed . Go to SAC for onspot registration</p>
    </Style>
  );
}

const Style = styled.div`
  padding: 1rem;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
