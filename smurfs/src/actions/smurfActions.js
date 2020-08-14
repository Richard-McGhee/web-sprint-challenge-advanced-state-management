import axios from 'axios'

export const GET_SMURFS_START = "GET_SMURFS_START"
export const GET_SMURFS_SUCCESS = "GET_SMURFS_SUCCESS"

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: GET_SMURFS_START })
    axios.get('http://localhost:3333/smurfs')
    .then((res) => {
        // console.log(res)
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data })
        console.log(res.data)
    })
    .catch((err) => {
        console.dir(err)
    })
}
export const postSmurfs = (data) => (dispatch) => {
    dispatch({ type: GET_SMURFS_START })
    axios.post('http://localhost:3333/smurfs', data)
    .then((res) => {
        console.log(res)
        dispatch({ type: GET_SMURFS_SUCCESS, payload: res.data})
    })
    .catch((err) => {
        console.dir(err)
    })
}