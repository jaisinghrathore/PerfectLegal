import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Card from "./Card"
import CardData from "./CardDetails"
import Property from "./images/property.jpg"
import {Link} from "react-router-dom"
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Aos from "aos";
import "aos/dist/aos.css";


const Services=()=>{
      //MOVE TO THE TOP

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})


useEffect(()=>{
    Aos.init({ duration: 2000});
},[])
    return(
<>
<Paper>
<Grid container style={{zIndex:0}}>
            <Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/2019/06/slider1-02.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>Perfect Legal --- Services</p>
            <h1 className="topu" style={{textAlign: "center"}}>SERVICES</h1>
                </div>
            </Grid>

        {/* services */}
        <Grid item xs={12}>
        <div style={{width:'100%',display:'flex',justifyContent: 'center',marginTop:"0px"}}>
        <div style={{width:"750px"}}>
        <p style={{color:"#CDBA6D",fontSize:"2.2rem",marginTop:'30px',textAlign:"center"}} className="linky"><b>SERVICES AREAS</b></p>
        <h1 className="services" style={{fontSize:"3.5rem",position:"relative",left:"50%",transform: 'translate(-50%)',textAlign:'center'}}>ALL Services</h1>
        <p style={{textAlign:"center",fontSize:"1.5rem"}}>Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services.</p>
        </div>
        </div>
        </Grid>

          {/* main property law */}


        <Grid item xs={12} md={3}></Grid>
        <Grid item xs={12} md={6}>
        <Container>
       <div style={{width:'100%',height:'100%'}}  data-aos="flip-down">
            <img src={Property} width='100%' height='300px'></img>
       <div className="risi" style={{width: '80%', height: '80px' , backgroundColor:"white",position:"relative",bottom: '40px',left:'30px',boxShadow:' 0 20px 40px rgb(0 0 0 / 6%)',padding:"12px 0 0 15px"}}>
       <p style={{color:"#CDBA6D",fontSize:"1.6rem",marginBottom:"6px"}} className="linky"><b>Property</b></p>
       <Link style={{fontSize:"2.0rem"}} to="/services/details">Property Law<ArrowForwardIosIcon/></Link>
       </div>
       </div>
       </Container>
       </Grid>
       
       <Grid item xs={12} md={3}></Grid>
       
        {/* services */}


            <Grid style={{width: '100%',padding:'20px 50px 0 50px'}} item xs={12} container> 
               
            <Grid container spacing={3} style={{marginTop:"20px"}} data-aos="fade-up">
            
            <div style={{width:'100%',display:'flex',justifyContent: 'center',marginTop:"0px"}}>
        <div style={{width:"750px"}}>
        <p style={{color:"#CDBA6D",fontSize:"2.2rem",marginTop:'30px',textAlign:"center"}} className="linky"><b>PRACTICE AREAS</b></p>
        <h1 className="services" style={{fontSize:"3.5rem",position:"relative",left:"50%",transform: 'translate(-50%)',textAlign:'center'}}>Other Services</h1>
        <p style={{textAlign:"center",fontSize:"1.5rem"}}>Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services.</p>
        </div>
        </div>
{CardData.map((val)=>(
    <Card
    key={val.id}
    img={val.img}
    info={val.info}
    details={val.details}
/>
))}
</Grid>

            </Grid>
            </Grid>
            </Paper>
            </>
    );
}

export default Services;