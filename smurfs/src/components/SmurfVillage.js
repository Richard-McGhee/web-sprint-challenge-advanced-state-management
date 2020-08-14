import React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    div{
        background-color: grey;
        border: 2px dotted black;
        width: 20%;
        margin-top: 3%;

        h2{
            color: blue;
        }
    }
`

function SmurfVillage(props) {
    return (
        <Container>
            {props.error && <h2>Well this isn't good</h2>}
            {props.loading && <h2>Smurfette is busy...</h2>}
            {props.smurfs.length > 0 ? (
                props.smurfs.map((smurf) => (
                    <div key={smurf.id}>
                        <h2>{smurf.name}</h2>
                        <h3>Height: ...they're all small</h3>
                        <p>Age: Very old, but more specifically --{">"} {smurf.age}</p>
                    </div>
                    
                ))
            ) : null}
        </Container>
    )
}

const mapProps = (state) => {
    return state
}
export default connect(mapProps, {})(SmurfVillage)