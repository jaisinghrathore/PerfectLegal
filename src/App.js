import React,{useEffect} from 'react';
import Nav from "./Nav";
import Side from "./SideNav";
import {Switch,Route} from "react-router-dom";
import Services from "./Services";
import Home from "./Home";
import About from "./About";
import Footer from "./Footer";
import Contact from "./Contact";
import ExtraDetails from "./ExtraDetails";
import MainService from "./MainService";
import PropertyMiniDetailes from "./PropertyMiniDetailes";
import Error from "./Error";
import PaymentInfo from "./PaymentInfo";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import {Provider} from "react-redux";
import store from "./redux/store"
import{darkMode} from "./redux"
import {connect} from "react-redux"
import Paper from "@material-ui/core/Paper"
import Success from "./Success"
import ChatBot from "./ChatBot"

function App(props) {


  store.subscribe(() => {
    localStorage.setItem('reduxStore' , JSON.stringify(store.getState()));
    // console.log(store.getState().login.data.token)
  })
    const theme = createMuiTheme({
      palette: {
        type:JSON.parse(localStorage.getItem("reduxStore")).mode,
      },
    });
  
  return (  
    <>

<Provider store={store}>
  <ThemeProvider theme={theme}>
  <Paper>
<Nav/>
<ChatBot/>
    <Side/>

    
    <Switch>
    
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/services" component={Services} />
    <Route exact path="/services/details" component={MainService} />
    <Route exact path="/services/details/:idd" component={PropertyMiniDetailes} />
    <Route exact path="/services/:id" component={ExtraDetails} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/paymentinfo" component={PaymentInfo} />
    <Route exact path="/success" component={Success} />

    <Route exact path="*" component={Error} />

    </Switch>

    {/* DARKMODE */}
      
    <button style={{border:"1px solid #CDBA6D",transform:"rotate(90deg)",backgroundColor:"rgba(1,1,1,0.6)",color:"white",position:"fixed",top:"220px",height:"25px",left:"0",width:"7rem",borderRadius:"6px 0px 0 0",left:"-16px"}} onClick={()=>props.darkMode("light")}><b>light</b></button><br/><br/>
    <button  style={{border:"1px solid #CDBA6D",transform:"rotate(90deg)",backgroundColor:"rgba(1,1,1,0.6)",color:"white",position:"fixed",top: '-webkit-calc(220px + 7rem)' ,height:"25px",left:"-16px",width:"7rem",borderRadius:"0px 6px 0 0"}}  onClick={()=>props.darkMode("dark")}><b>dark</b></button>
    {/* DARKMODE */}

<Footer/> 
</Paper>
</ThemeProvider>
</Provider>
    </>
  );
}

const mapStatetoProps=(state)=>{

  return{
    mode:state.mode
  }
  
  }
  
  
  const mapDispatchToProps=(dispatch)=>{
  return{
    darkMode:function(light){ 
      dispatch(darkMode(light));
    }
  }
  }
export default  connect(mapStatetoProps,mapDispatchToProps) (App);
