import { GET_SMURFS_START, GET_SMURFS_SUCCESS } from '../actions/smurfActions'

const initialState = {
    error: "",
    loading: false,
    smurfs: []
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_SMURFS_START:
            return {
                ...state,
                loading: true,
                error: ""
            }
        case GET_SMURFS_SUCCESS:
            return {
                ...state,
                loading: false,
                smurfs: action.payload
            }
        default:
            return state
    }
}