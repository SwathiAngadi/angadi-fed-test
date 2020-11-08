import {USER} from './../actions';

const INITIAL_STATE = {
   userInfo: []
};

export default function  (state = INITIAL_STATE, action) {
    debugger;
    switch (action.type) {
        case USER:
            return {   
                
                ...state,            
                userInfo: state.userInfo.concat(action.payload)
            };
        default:
            return state;
    }   
}
 
