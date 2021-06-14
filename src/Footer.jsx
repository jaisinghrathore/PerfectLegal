import React,{useEffect,useState} from 'react'
import Grid from '@material-ui/core/Grid';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import AlarmIcon from '@material-ui/icons/Alarm';
import {Link} from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import axios from "axios"
import {useHistory} from "react-router-dom";
import firebaseDb from "./Firebase"


function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

export default function Footer() {

    

    const[initial,updated]=useState({
        email:""
    });


    const[subinitial,subupdated]=useState(initial);

        const history=useHistory();  //USEhISTORY


        const [open, setOpen] = React.useState(false);

        
      
        const handleClose = (event, reason) => {
          if (reason === 'clickaway') {
            return;
          }
      
          setOpen(false);
        };

        



    const changeEvent=(event)=>{
        updated({...initial,[event.target.name]:event.target.value})
    }

    const submitEvent=(event)=>{
        event.preventDefault();


        subupdated(initial);

            const final={
                email:initial.email
            }

                
        if(!initial.email){
        alert("fill The Details");
        }
        else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(initial.email)){
        alert("Enter valid Email");
        }else{
            firebaseDb.child("perfectLegalEmails").push(final,(err)=>{
                if(err){
                    console.log(err);
                }
            });
            setOpen(true);

        }
updated({["email"]:""})
    }


    return (
        <>
     
     <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        <h5 style={{marginTop:"6px"}}>YOUR QUERIES HAS BEEN RECORDED.</h5>
        </Alert>
      </Snackbar>
      



        <Grid container style={{width:"100%",backgroundColor:"rgba(1,1,1,0.8)",paddingBottom:""}}>
        <Grid xs={12} md={4} style={{border:'1px solid #555555',height:'110px',paddingTop:"44px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}> <LocationOnIcon style={{fontSize:"4rem",color:"#CDBA6D"}}></LocationOnIcon> <span style={{color:'#FFFFFF'}}>Address </span>B-199 Basement Lajpat Nagar Part 1 New Delhi 110024</p>
            </Grid>
            <Grid xs={12} md={4} style={{border:'1px solid #555555',height:'110px',paddingTop:"44px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}> <MailOutlineIcon style={{fontSize:"4rem",color:"#CDBA6D"}}></MailOutlineIcon> <span style={{color:'#FFFFFF'}}>Email </span>perfectdox1@gmail.com</p>
            </Grid>
            <Grid xs={12} md={4} style={{height:'110px',border:'1px solid #555555',paddingTop:"44px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}>  <AlarmIcon style={{fontSize:"4rem",color:"#CDBA6D"}}></AlarmIcon> <span style={{color:'#FFFFFF'}}>Open Hours </span> Mon-Sat : 10am – 6pm</p>
            </Grid> 
            <Grid xs={12} md={6} style={{height:'180px',borderRight:"1px solid #555555",paddingTop:"10px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}> 

                        <p className="logoName" style={{fontSize:"30px",color:"#CDBA6D",textShadow:"1px 1px 6px #CDBA6D",textAlign:"center"}}>Perfect Legal</p>

                        <form style={{marginLeft:"60px"}} onSubmit={submitEvent}>
                        <input  onChange={changeEvent} type="text" placeholder="Email address" value={initial.email} style={{width:"240px",height:"55px",marginTop:"10px"}} name="email"/>
                        <button type="submit" className="btnu" style={{width:"60px",height:"54px",border:"1px solid transparent",backgroundColor:"#CDBA6D",position:"relative",right:"60px"}} ><EmailIcon style={{color:'#fff',fontSize:'20px'}}></EmailIcon></button>
                        </form>

                 </p>
            </Grid> 
            <Grid xs={12} md={6} style={{paddingTop:"40px"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}>
                
                {/* List */}
                <div style={{width:'50%',float:"left",position:'relative'}} >
                <ul className='listu'>
                <li><Link className="nav-link" to="/">HOME<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link" to="/about">About<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link" to="/services">Services<ArrowForwardIosIcon/></Link></li>
                </ul>
                </div>

                <div style={{width:'50%',float:"right",position:'relative'}} >
                <ul className='listu'>
                <li><Link className="nav-link"  to="/contact">CONTACT<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link">DIRECT<ArrowForwardIosIcon/></Link></li>
                <li><Link className="nav-link" to="paymentinfo">Payment<ArrowForwardIosIcon/></Link></li>
                </ul>
                </div>
                
                {/* List */}
                
                 </p>
            </Grid> 
           
        </Grid>
        <Grid xs={12} style={{paddingTop:"20px",paddingBottom:"10px",backgroundColor:"rgba(1,1,1,0.8)",borderTop:"1px solid #555555"}}>
                <p style={{fontSize:"1.7rem",color:'#999999',textAlign:'center'}}> Copyright © 2021 perfectLegal. All rights reserved. </p>
            </Grid> 
        </>
    )
}
