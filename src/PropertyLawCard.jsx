import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Link} from "react-router-dom";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 200,
    },
  });

  

export default function PropertyLawCard(props) {


    const classes = useStyles();
    return (
        <>
       <Grid item xs={12} md={4}>
       <div style={{width:'100%',height:'100%'}}>
            <img src={props.img} width='100%' height='300px'></img>
       <div className="risi" style={{width: '80%', height: '80px' , backgroundColor:"white",position:"relative",bottom: '40px',left:'30px',boxShadow:' 0 20px 40px rgb(0 0 0 / 6%)',padding:"12px 0 0 15px"}}>
       <p style={{color:"#CDBA6D",fontSize:"1.6rem",marginBottom:"6px"}} className="linky"><b>{props.info}</b></p>
       <Link style={{fontSize:"2.0rem"}} to={`/services/details/${props.details.split(" ")[0]}`}>{props.details} <ArrowForwardIosIcon/> </Link>
       <span style={{color:"#CDBA6D"}}>{props.small}</span>
       </div>
       </div>
       </Grid>
        
        </>
    )
}
