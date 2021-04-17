import {createStore} from "redux"
import darkReducer from "./dark/darkReducer"




const store=createStore(darkReducer);

export default store; 