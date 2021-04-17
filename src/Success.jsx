import React from 'react'
import Paper from "@material-ui/core/Paper"
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";


export default function Success() {

      //MOVE TO THE TOP

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


    let history = useHistory();
    let location = useLocation();

    const back=()=>{
        history.goBack();
}
    return (
        <>
        <Paper>
                    <Paper style={{ height:"100vh",width:"100%",position:"absolute",top:"0",zIndex:"999999"}}>
                        <h1 style={{fontSize:"3rem",position:"absolute",left:"50%",top:"42%",transform:"translate(-50%,-50%)",textAlign:"center"}}>{location.state?location.state:"FIRST SUBMIT THE FORM."}</h1>
                        <button onClick={back} style={{width:"80%",height:"40px",border:"none",backgroundColor:"#CDBA6D",color:"white",fontSize:"1.5rem",position:"absolute",left:"50%",top:"57%",transform:"translate(-50%,-50%)"}}><strong>goBack</strong></button>

                    </Paper>            
        </Paper>
        </>
    )
}
