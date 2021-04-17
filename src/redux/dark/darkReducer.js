import {DARK_MODE} from "./darkType";


const initialState= {
    mode:"light"
}

const darkReducer=(state=initialState,action)=>{

         switch(action.type){
            case DARK_MODE:return{
                ...state,
                mode:action.payload
            }
            default:return state;
        }

}

export default darkReducer;