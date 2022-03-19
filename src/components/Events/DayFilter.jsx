import styled from "styled-components";

export default function DayFilter({ filters = [], onChange }) {
  return (
    <Filter>
      {filters.map(({ key, active }) => (
        <button
          onClick={onChange(key)}
          className={active ? "btn active" : "btn"}
          key={key}
        >
          {key}
        </button>
      ))}
    </Filter>
  );
}

const Filter = styled.div`
  display: inline-flex;
  background-color: #171717;
  box-shadow: 0 3px #ffffff13;
  border-radius: 10px;
  margin: 1rem 0;

  button {
    font-size: 1rem;
    padding: 5px 15px;
    border-radius: 10px;

    &.active {
      background: #ec9e3b;
    }

    &:hover:not(.active) {
      background-color: #ec9e3b45;
    }
  }
`;
