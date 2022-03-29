import React from 'react'
import { RegisterContainer,Pack,Type, ButtonContainer } from './Register.styles';
const Register = ()=>{
    return(
        <RegisterContainer>
            <Pack>
                <Type>
                    <ul>
                        <li>Registration</li>
                    </ul>
                </Type>
                <ButtonContainer>
                    <span>1000/-</span>
                    <a href="google.com">Pay Now</a>
                </ButtonContainer>
            </Pack>
            <Pack>
                <Type>
                    <ul>
                        <li>Registration</li>
                        <li>+</li>
                        <li>Accomodation</li>
                    </ul>
                </Type>
                <ButtonContainer>
                    <span>3000/-</span>
                    <a href="google.com">Pay Now</a>
                </ButtonContainer>
            </Pack>
            <Pack>
                <Type>
                    <ul>
                        <li>Registration</li>
                        <li>+</li>
                        <li>Proshows</li>
                    </ul>
                </Type>
                <ButtonContainer>
                    <span>4000/-</span>
                    <a href="google.com">Pay Now</a>
                </ButtonContainer>
            </Pack>
            <Pack>
                <Type>
                    <ul>
                        <li>Registration</li>
                        <li>+</li>
                        <li>Accomodation</li>
                        <li>+</li>
                        <li>Proshows</li>
                    </ul>
                </Type>
                <ButtonContainer>
                    <span>5000/-</span>
                    <a href="google.com">Pay Now</a>
                </ButtonContainer>
            </Pack>
        </RegisterContainer>
    )
}

export default Register;