import {GET_COLOR} from "./constants"

const initialState = {
    color:"black"
};

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_COLOR:
            return {
                ...state, 
              color: action.payload
              
            };
        
        default:
            return state;
    }
}