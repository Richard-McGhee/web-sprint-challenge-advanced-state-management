import React, { useState } from 'react';
import { connect } from 'react-redux'
import { postSmurfs } from '../actions/smurfActions'

function SmurfMaker(props) {
    const initValues = {
        name: "",
        age: 0,
        height: ""
    }
    const [newSmurf, setNewSmurf] = useState(initValues)

    const handleChanges = evt => {
        setNewSmurf({
            ...newSmurf,
            [evt.target.name]: evt.target.value
        })
    }
    const handleSubmit = evt => {
        evt.preventDefault()
        props.postSmurfs(newSmurf)
        setNewSmurf(initValues)

    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Smurf's Name: <input type="text"
            name="name"
            placeholder="Pick a good one"
            value={newSmurf.name}
            onChange={handleChanges}
            /></label>
            <label>Smurf's Age: <input type="number"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
            /></label>
            <label>Smurf's "height": <input type="text"
            name="height"
            placeholder="x cm"
            value={newSmurf.height}
            onChange={handleChanges}
            /></label>
            <button>Make A Brand New Smurf</button>
        </form>
    )
}

export default connect(null, { postSmurfs })(SmurfMaker)