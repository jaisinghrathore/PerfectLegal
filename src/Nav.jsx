import React , {useEffect,useState} from 'react';
import Switch from '@material-ui/core/Switch';
import { useCookies } from 'react-cookie';
import {Link} from "react-router-dom";
import {NavLink} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons'
import logo from "./images/loggo.png";
import MenuIcon from '@material-ui/icons/Menu';


const Nav=(props)=>{
    
    const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
    const[hid,hidden]=useState({
      width:'4.5rem',height:'4.5rem',backgroundColor:'#CDBA6D',position:'fixed',bottom:"20px",right:'14px',borderRadius:'4px',boxShadow:"2px 2px 2px 1px #666666",zIndex:"10",cursor:"pointer",display:"none"
  });


    const[initialStyle,updatedStyle]=useState(
      {
        color:"white",
        fontSize:"1.6rem"

      }
    );
    const[initialStyleNav,updatedStyleNav]=useState(
      {
        backgroundColor:"transparent",
        height:"80px",
        zIndex:1
      }
    );
    const[initialStyleA,updatedStyleA]=useState(
      {
        width:"120px",
        position:"absolute",
        top:-10
      }
    );


            const [state, setState] = React.useState({
          checkedA: true
        });
      
  const clicky=()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        }


                 

        // state.checkedA==false?alert("hello"):alert('hi');        

        window.onscroll=()=>{
          if(window.scrollY>20){
                updatedStyle({...initialStyle,color:"white"})
                updatedStyleNav({...initialStyleNav,backgroundColor:"rgba(1,1,1,0.6)"})
                updatedStyleA({...initialStyle,  width:"80px",
                position:"absolute",
                top:-10})
                hidden({...hid,display:"block"})
              }else{
                updatedStyleNav({...initialStyleNav,backgroundColor:"transparent"})
                hidden({...hid,display:"none"})
                updatedStyleA({...initialStyle,  width:"120px",
                position:"absolute",
                top:-10})
              }
            }
              // darkmode
         
            
    return(
        <>
         <nav className="navbar navbar-expand-md fixed-top navigation " style={initialStyleNav} >
  <Link className="ml-md-5 navbar-brand linky"  href="/" >
  <img src={logo} alt="logo" style={initialStyleA}/>
  </Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
  
    <MenuIcon style={{color:"white",fontSize:"25px",zIndex:"5",position:'fixed',right:"25px",top:"25px"}}></MenuIcon>
  
    </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar" >
    <ul className="navbar-nav ml-auto">
      <li className="nav-item mr-5">
        <NavLink  exact activeClassName="active"  style={initialStyle} className="nav-link" to="/"> HOME</NavLink>
      </li>
      <li className="nav-item mr-5">
        <NavLink  exact activeClassName="active"  style={initialStyle} className="nav-link" to="/about">ABOUT</NavLink>
      </li>
      <li className="nav-item mr-5">
        <NavLink  exact activeClassName="active"  style={initialStyle} className="nav-link" to="/services">SERVICES</NavLink>
      </li> 
      <li className="nav-item dropdown mr-5">
      <NavLink  exact activeClassName="active" to="/contact" style={initialStyle} className="nav-link">
      CONTACT US
      </NavLink>
    </li>
    <li className="nav-item dropdown mr-5">
      <Link  to="/paymentinfo" className="nav-link  linky"  style={{fontSize:"1.6rem"}}>
       PAYMENT
      </Link>
    </li>
  
    </ul>
  </div>  
</nav>


<div>
            <div onClick={clicky} style={hid} >
<FontAwesomeIcon icon={faArrowUp} style={{fontSize:'3rem',color:"#fff",position:'relative',left:"50%",top:"50%",transform:"translate(-50%,-50%)"}}  />
             </div>
        </div>
        </>
    );
}



export default  Nav;