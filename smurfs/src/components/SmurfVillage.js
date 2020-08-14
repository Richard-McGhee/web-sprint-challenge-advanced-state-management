import React from 'react';
import { connect } from 'react-redux'

function SmurfVillage(props) {
    return (
        <div>
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
        </div>
    )
}

const mapProps = (state) => {
    return state
}
export default connect(mapProps, {})(SmurfVillage)