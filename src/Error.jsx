import React from 'react';
import { useHistory } from "react-router-dom";
import Paper from "@material-ui/core/Paper";

export default function Error() {
    let history = useHistory();
      //MOVE TO THE TOP

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})



    const back=()=>{
            history.goBack();
    }



    return (
        <>
            <Paper>
            <div style={{width: '100vw',height:'100vh',backgroundColor:"grey",display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
                <h1 style={{fontSize:"4rem",textAlign:'center'}}>ERROR 404 :-: PAGE NOT FOUND</h1>
                <button onClick={back} style={{width:"30%",height:"40px",border:"none",backgroundColor:"#CDBA6D",color:"white",fontSize:"1.5rem",position:'relative',top:"60px",right:"39%"}}><strong>goBack</strong></button>
            </div>
            </Paper>
        </>
    )
}
