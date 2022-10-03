import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GavelIcon from '@material-ui/icons/Gavel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale , faBriefcase } from '@fortawesome/free-solid-svg-icons'
import Card from "./Card"
import Aos from "aos";
import "aos/dist/aos.css";
import CardData from "./CardDetails"
import Paper from "@material-ui/core/Paper"
import Anim from "./images/anim.png"
import {useHistory} from "react-router-dom";

const Home=()=>{

const history = useHistory();


useEffect(()=>{
    Aos.init({ duration: 1000});
},[])



  //MOVE TO THE TOP

  React.useEffect(()=>{
    document.documentElement.scrollTop = 0;
})




    return(
        <>
        <Paper>
      <Grid container style={{zIndex:0}}>
            <Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/2019/06/slider1-02.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>WE FIGHT FOR JUSTICE</p>
            <h1 className="topu" style={{textAlign:"center"}}>SEPCIAL  APPROACH , DEDICATED  ATTORNEYS</h1>
                </div>
            </Grid>
            <Grid style={{width: '100%', backgroundColor:"#42474c",padding:'42px 50px 50px 50px'}} item xs={12} container data-aos="fade-up"> 
                
                <Grid item xs={12} md={6}>
                <Container>
                <p style={{color:"#CDBA6D",fontSize:"1.5rem"}} className="linky"><b>WHY CHOOSE US</b></p>
                    <h2 className="headi" style={{fontSize:'4rem',color:"white"}}>
                        Experties In All Aspects<br></br> Of Legal Matters
                    </h2>
                 </Container>
                </Grid>


                <Grid item  xs={12} md={6} >
                <Container>
                    <p className="capital" style={{fontSize:"1.5rem",color:'white'}}>We provide best legal solutions towards property, criminal , civil , company and labour matters and specialized services in property matters.</p>
               </Container>
                </Grid>

            </Grid>
            

      </Grid>






<Grid className="homeBox" container style={{width: '90%',position: 'relative',left:"50%",transform: 'translate(-50%)',bottom:'40px',boxShadow:'2px 2px 2px 0px silver',cursor: 'pointer'}}>

<Grid className="scale" item  xs={12} md={4} style={{backgroundColor:"#CDBA6D",height:'309px',width:"386px",boxSizing:"border-box",padding:"34px 34px 0 34px"}}     >
<GavelIcon style={{fontSize:'6rem',color:"white",margin:"12px 0 23px 10px"}}></GavelIcon>
<p className="headi1" style={{fontSize:'2.4rem',color:"white"}}>Create your rent agreement</p>
<p  style={{fontSize:'1.5rem',color:"white"}}> Create your own rent agreement.</p>
</Grid>


<Grid className="scale" item xs={12} md={4} style={{backgroundColor:"white",height:'309px',width:"386px",borderRight:"0.4px solid #d9dadb",boxSizing:"border-box",padding:"34px 34px 0 34px",boxShadow:'2px 2px 2px 0px silver',border:"1px solid #666666"}}    >
<FontAwesomeIcon icon={faBalanceScale} style={{fontSize:'6rem',color:"#CDBA6D",margin:"12px 0 23px 10px"}}  />
<p className="headi2" style={{fontSize:'2.4rem',color:'#666666'}}>Create your Sale Deed</p>
<p  style={{fontSize:'1.5rem',color:'#666666'}}>Ceate your own sale deed as per your requirements.</p>
</Grid>


<Grid className="scale" item xs={12} md={4} style={{backgroundColor:"white",height:'309px',width:"386px",boxSizing:"border-box",padding:"34px 34px 0 34px",boxShadow:'2px 2px 2px 0px silver',border:"1px solid #666666"}}  >
<FontAwesomeIcon icon={faBriefcase} style={{fontSize:'6rem',color:"#CDBA6D",margin:"12px 0 23px 10px"}}  />
<p className="headi2" style={{fontSize:'2.4rem',color:'#666666'}}>Create your Will</p>
<p  style={{fontSize:'1.5rem',color:'#666666'}}> Make your own Will as per your need.</p>
</Grid>




</Grid>







<Grid container style={{width:"100%",backgroundColor:'#f0f0f0',boxSizing:"border-box",padding:"40px 60px 0 60px"}} data-aos="fade-up">

<Grid item xs={12} md={6}>
<img src={Anim} style={{width:"100%"}}></img>
</Grid>

<Grid item  xs={12} md={6} style={{paddingTop:'60px'}}>
<p style={{color:"#CDBA6D",fontSize:"1.5rem",marginBottom:'20px'}} className="linky"><b>WHY CHOOSE US</b></p>
<h2 className="headi" style={{fontSize:'4rem',color:"#666666"}}>
Something About Law
</h2>
<p style={{color:"#666666",fontSize:"1.5rem",marginBottom:"30px"}}>Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services,
 litigation and corporate risk practices .Our lawyers offer clients a range of integrated global capabilities.</p>
 
 <div style={{width:'50%',float:"left"}}>
        <ul>
        <li>Family Law</li>
        <li>Property Law</li>
        <li>Financial Law</li>
        </ul>
</div>

<div style={{width:'50%',float:"right"}}>
        <ul>
        <li>Criminal Law</li>
        <li>Corporate Law</li>
        <li>Personal Law</li>
        </ul>
</div>

<div style={{width:'100%',float:"left",borderTop:'1px solid rgba(1,1,1,0.1)',height:"90px",marginBottom:"30px"}}>
<p style={{textAlign:'center',fontSize:'1.5rem',marginTop:'20px',color:'#666666'}}>Call to ask any question</p>
<h1 style={{textAlign:'center',fontSize:'3rem',marginTop:'20px',color:'#666666'}}>+91 9599749463</h1>
</div>


</Grid>

</Grid>


<Grid container>
<Container>
<Grid item xs={12}>
<div style={{width:'100%',display:'flex',justifyContent: 'center',marginTop:"40px"}}>
        <div style={{width:"750px"}}>
        <p style={{color:"#CDBA6D",fontSize:"2.2rem",marginTop:'30px',textAlign:"center"}} className="linky"><b>PRACTICE AREAS</b></p>
        <h1 className="services" style={{fontSize:"3.5rem",width:"420px",position:"relative",left:"50%",transform: 'translate(-50%)',textAlign:'center'}}>Other Services</h1>
        <p style={{textAlign:"center",fontSize:"1.5rem"}}>Our lawyers offer clients a range of integrated global capabilities, including some of the world’s most active M&A, real estate, financial services.</p>
        </div>
        </div>
</Grid>
        <Grid container spacing={3} style={{marginTop:"20px"}} data-aos="fade-up">

        {CardData.map((val)=>(
            <Card
            key={val.id}
            img={val.img}
            info={val.info}
            details={val.details}
            
        />
        ))}
        </Grid>
        </Container>
            </Grid>
</Paper>
    </>
);
}

export default Home;
