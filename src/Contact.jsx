import React,{useState,useEffect} from 'react'
import Container from "@material-ui/core/Container"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import {useHistory} from "react-router-dom";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  
 

  


export default function Contact() {
    //const[ini,upd]=useState([]);


      //MOVE TO THE TOP

  React.useEffect(()=>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
},[])


const [open, setOpen] = React.useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };

      


    useEffect(()=>{
        Aos.init({ duration: 2000});
        // const vall=async()=>{
        //     const value= await axios.get('http://localhost:4000/app/signupshow')
        //   upd(value.data);
        //   }
        //   vall()
    },[])

    // ini.map((value)=>{
    //     console.log(value.name+'='+value.email );
    // });

    const history=useHistory();

    const[init,upda]=useState({
        name:"",
        mobile:"",
        email:"",
        message:""
    });


    const[init1,upda1]=useState(init);

    // onChange
    const changi=(event)=>{
        upda({...init,[event.target.name]:event.target.value})
    }

    // onClick


    const clicky=(event)=>{



     
        event.preventDefault()
            upda1(init)
            const register={
                name:init.name,
                mobile:init.mobile,
                email:init.email,
                message:init.message,
            }

            axios.post('http://localhost:4000/app/signup',register).then((response)=>{
                if(response.data.name==="ValidationError"){
        alert("Enter valid Options");
    }else{
        setOpen(true);
    }
})  

axios.post('https://formspree.io/f/xzbkldqo',register).then((response)=>{})  

init.name=" ";
init.mobile=" ";
init.email=" ";
init.message=" ";
            
                          }
                         

    return (
        <>


        
<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
        <h5 style={{marginTop:"6px"}}>YOUR QUERIES HAS BEEN RECORDED.</h5>
        </Alert>
      </Snackbar>



        <Paper>
                   <Grid container style={{zIndex:0}}>


<Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/revslider/home-slider-1/slider1-01.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
    <div>
<p className="top linky" >Perfect Legal --- Write To Us</p>
<h1 className="topu" style={{textAlign: "center"}}>CONTACT US</h1>
    </div>
</Grid>

<Grid item xs={12} container style={{padding:"20px"}}   data-aos="fade">

<Grid item xs={12} md={8} container>
<Container>
   <div style={{width: "100%",height:"508px"}}>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.8047984074465!2d77.23861231508135!3d28.575623782440257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM0JzMyLjMiTiA3N8KwMTQnMjYuOSJF!5e0!3m2!1sen!2sin!4v1614093992397!5m2!1sen!2sin" width="100%" height="100%" style={{border:"none"}} loading="lazy"></iframe>
   </div>
   </Container>
</Grid>

<Grid item xs={12} md={4}>


			<div  className="map"  style={{borderRadius: '30px',width: '400px',height: '460px',backgroundColor: 'rgba(1, 1, 1,0.6)',marginTop: '20px',position: 'relative',right: '160px',boxShadow: "2px 2px 2px 1px #555555"}}>
				
<form>
					<h1 className='ContactHeading' style={{textAlign: 'center',color:'#fff',lineHeight: "80px",color:"white"}} >Contact us</h1>
					
                    <input onChange={changi} className="inpu" type="text" placeholder="Name"  name="name" value={init.name}/>

					<input onChange={changi} className="inpu" type="number" placeholder="Mobile"  name="mobile" style={{marginTop: "30px"}} value={init.mobile}/>

					<input onChange={changi} className="inpu" type="email" placeholder="E-mail" style={{marginTop: "30px"}} name="email" value={init.email}/>

					<textarea onChange={changi} className="textA" placeholder="Message" name="message" value={init.message}></textarea>

					<input className="clickk" onClick={clicky} type="submit" style={{width: '80px',height: '35px',border: 'none',backgroundColor:'#CDBA6D',borderRadius: '10px',marginTop:"26px",marginLeft:"50%",transform: 'translate(-50%)',color:'white',fontSize:"1.5rem"}}/>
</form>

                </div>

</Grid>


</Grid>



</Grid>
</Paper>
        </>
    )
}
