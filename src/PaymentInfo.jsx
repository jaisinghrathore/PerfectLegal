import React from 'react'
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Payment from "./images/payments.jpg";
import pay from "./images/pay1.jpg";
import "aos/dist/aos.css";
import Aos from "aos";
import { Container } from '@material-ui/core';

export default function PaymentInfo() {


    
    React.useEffect(()=>{
        Aos.init({ duration: 1000});
    },[])



      //MOVE TO THE TOP

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})





    return (
        <div>
             <Grid container style={{zIndex:0}}>

            <Grid item xs={12} style={{height:"505px",backgroundImage:`url(${Payment})`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>PAYMENT'S PAGE</p>
            <h1 className="topu">ALL THE PAYMENT OPTIONS</h1>
                </div>
            </Grid>           
        <Grid item md={4}></Grid>
        <Grid item sx={12} md={4} style={{padding:'30px 0'}}  data-aos="fade" >
        <>
      <div style={{width: '100%',boxShadow:"2px 2px 2px 1px grey",borderRadius:"15px",backgroundColor:"grey"}}>
          {/* heading of Payment info */}
            <div style={{width: '100%', height: '60px',background:' linear-gradient(45deg, black 80%, #fed517 65%)',borderRadius:"15px 15px 0 0",display:"flex",alignItems: 'center'}}>
                <h1 style={{color:"white",textAlign:"left",marginLeft:"20px"}} className="linky"><strong>Payment's Info.</strong></h1>
            </div>
                {/* info if it */}
                <div style={{width:"100%",padding:"40px 50px"}}>
                <p className="linky" style={{fontSize:"2rem",color:"white"}}>Google pay</p>
                <h1 className="linky" style={{fontSize:"3rem",color:"white"}}>9599749463</h1>
                <hr></hr>
                <p className="linky" style={{fontSize:"2rem",color:"white"}}>Phone pay</p>
                <h1 className="linky" style={{fontSize:"3rem",color:"white"}}>9599749463</h1>
                <hr></hr>
                <p className="linky" style={{fontSize:"2rem",color:"white"}}>Paytm</p>
                <h1 className="linky" style={{fontSize:"3rem",color:"white",marginBottom:"30px"}}>9599749463</h1>
                <img width="100%" height="400px" src={pay} style={{borderRadius:"10px"}}></img>
                </div>
                </div>
                </>
        </Grid>


      </Grid>
        </div>
    )
}
