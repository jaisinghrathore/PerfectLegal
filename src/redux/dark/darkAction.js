import {DARK_MODE} from "./darkType";

export const darkMode=(light="light")=>{
    return{
            type:DARK_MODE,
            payload:light
    }
}