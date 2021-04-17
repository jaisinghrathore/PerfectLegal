import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import "aos/dist/aos.css";
import Aos from "aos";
import about from "./images/about.png"




  
const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });


function About() {

    //MOVE TO THE TOP

    React.useEffect(()=>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  })
  
  

  useEffect(()=>{
    Aos.init({ duration:1000});
},[])

    const classes = useStyles();
    const [progress, setProgress] = React.useState(10);
    const [progress1, setProgress1] = React.useState(10);
    const [progress2, setProgress2] = React.useState(10);

  

    function LinearProgressWithLabel(props) {
        return (
            <Box mr={1}   style={{height:"70px"}}>
        
       
                    {/* ending and joining */}
             
              <LinearProgress variant="determinate" style={{backgroundColor:"silver",height:"7px",clear:"both"}}  {...props} />
              
            </Box>
              
        );
      }

      

LinearProgressWithLabel.propTypes = {
    /**
     * The value of the progress indicator for the determinate and buffer variants.
     * Value between 0 and 100.
     */
    value: PropTypes.number.isRequired,
  };
    
    

            React.useEffect(()=>{
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 80 ? 80 : prevProgress + 10));
                setProgress1((prevProgress1) => (prevProgress1 >= 70 ? 70 : prevProgress1+ 10));
                setProgress2((prevProgress2) => (prevProgress2 >= 90 ? 90 : prevProgress2 + 10));
            }, 80);
            return () => {
                clearInterval(timer);
                clearInterval(timer);
              clearInterval(timer);
            };
        },[])



    return (
        <>
        <Paper>
           <Grid container style={{zIndex:0}}>


            <Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/revslider/home-slider-1/slider1-01.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>Perfect Legal --- About Us</p>
            <h1 className="topu" style={{textAlign: "center"}}>ABOUT US</h1>
          
                </div>
            </Grid>

            <Grid  data-aos="fade"   style={{width: '100%', marginBottom:"60px",marginTop:"40px"}} item xs={12} container> 
        
                <Grid item xs={12} md={6}>
                    <Container>
                    <div style={{width:'100%', height:'100%',paddingTop:"52px"}}>
                        <img src={about} style={{width:'90%', height:'100%'}}></img>
                    </div>
                    </Container>
                </Grid>


                <Grid item  xs={12} md={6} style={{paddingTop:'30px'}}>
                  <Container>
                  <p style={{color:"#CDBA6D",fontSize:"1.5rem"}} className="linky"><b>WHY CHOOSE US</b></p>
                    <h2 className="headi" style={{fontSize:'4rem'}}>
                        Experties In All Aspects of <br></br> Property Law
                    </h2>
                    <p className="capital" style={{fontSize:"1.5rem",marginBottom:"50px"}}>We provide best services in all property matters like registration of property, sale agreement of property, transfer of property, mutation of property </p>

            {/* box1 */}

            <div className={classes.root} style={{marginTop:'10px'}}>
            <Typography variant="h4"  style={{width:"50%",float:'left',position:'relative'}}>
              Success Cases
              </Typography>
      <LinearProgressWithLabel value={progress}  />
    </div>

            {/* box1 */}


            {/* box2 */}

            <div className={classes.root}>
            <Typography variant="h4"  style={{width:"50%",float:'left',position:'relative'}}>
            Case Experience     
              </Typography>
      <LinearProgressWithLabel value={progress1} />
    </div>

            {/* box2 */}


            {/* box3 */}

            <div className={classes.root}>
            <Typography variant="h4"  style={{width:"50%",float:'left',position:'relative'}}>
              Real Estate
              </Typography>
      <LinearProgressWithLabel value={progress2} />
    </div>

            {/* box3 */}

            </Container>
                </Grid>

            </Grid>
            

        

      </Grid>
</Paper>
        </>
    )
}



export default About;