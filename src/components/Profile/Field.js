import React from 'react';
import styled from 'styled-components';

const Field = ({field , value})=>{
    return(

        <Container className="field-value col-lg-4 col-sm-6">
            <p className="field font-weight-bold">{field}:</p>
            <h6 className="value text-muted"> {value} </h6>
        </Container>

    )
}

export default Field;

const Container = styled.div``;
