import React , { useState } from 'react';
import styled from 'styled-components';

const Checkbox = ()=>{
    return(
        <Container className='chekcbox'>
            <label className="label">
                <input  className="label__checkbox" type="checkbox" />
                <span className="label__text">
                <span className="label__check">
                    <i className="fa fa-check icon"></i>
                </span>
                </span>
            </label>
        </Container>
    )
}

export default Checkbox;

const Container = styled.div`
    .label__checkbox {
  display: none;
}

.label__check {
  display: inline-block;
  border-radius: 50%;
  border: 5px solid rgba(0,0,0,0.5);
  background: white;
  vertical-align: middle;
  margin-right: 20px;
  width: 2em;
  height: 2em;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border .3s ease;
  
  i.icon {
    opacity: 0.5;
    font-size: 'calc(1rem + 1vw)';
    color: black;
    /* transition: opacity .3s .1s ease; */
    -webkit-text-stroke: 3px rgba(0,0,0,.5);

    &:hover{
        color: 5px solid rgba(0,0,0);
    }
  }
  
  &:hover {
    border: 5px solid rgba(0,0,0);

  }
}

.label__checkbox:checked + .label__text .label__check {
  animation: check .5s cubic-bezier(0.895, 0.030, 0.685, 0.220) forwards;
  
  .icon {
    opacity: 1;
    transform: scale(0);
    color: white;
    -webkit-text-stroke: 0;
    animation: icon .3s cubic-bezier(1.000, 0.008, 0.565, 1.650) .1s 1 forwards;
  }
}

@keyframes icon {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1)
  }
}

@keyframes check {
  0% {
    width: 1.5em;
    height: 1.5em;
    border-width: 5px;
  }
  10% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.1;
    background: rgba(0,0,0,0.2);
    border-width: 15px;
  }
  12% {
    width: 1.5em;
    height: 1.5em;
    opacity: 0.4;
    background: rgba(0,0,0,0.1);
    border-width: 0;
  }
  50% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 0.6;
  }
  100% {
    width: 2em;
    height: 2em;
    background: #00d478;
    border: 0;
    opacity: 1;
  }
}
`;