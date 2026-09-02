import { DECREMENT_HANDLE, INCREMENT_HANDLE } from "../actionType"

export const increment = (data) => ( dispatch) => {
    dispatch({type: INCREMENT_HANDLE})
}
export const deccrement = (data) => (dispatch) => {
    dispatch({type: DECREMENT_HANDLE})

    
}