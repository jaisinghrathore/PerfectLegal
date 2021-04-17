import React,{useState} from 'react';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ClearIcon from '@material-ui/icons/Clear';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
export default function ChatBot() {
    
    const history=useHistory();

    const[init11,upda11] = useState("none");
    const[init,upda]=useState({
        name:"",
        mobile:"",
        email:"",
        message:""
    })

    const openn=()=>{
       upda11("block")
    }

    const closee=()=>{
       upda11("none")
    }

        const changi=(e)=>{
                upda({...init,[e.target.name]:e.target.value})
        }


        const clicky=(event)=>{
            event.preventDefault();

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
        history.push("./success","YOUR QUERIES HAS BEEN RECORDED")
    }
})

axios.post('https://formspree.io/f/xzbkldqo',register).then((response)=>{})  

    upda({...init,['name']:"",['mobile']:" ",['email']:" ",['message']:" "})

        }
        


    return (
        <div>


            <div style={{width:"45rem", height:"45rem",backgroundColor:"rgb(205, 186, 109)",position:"fixed",left:"20px",bottom:"65px",cursor:"pointer",zIndex:"999999",borderRadius:"10px",display:init11}}>
                <div style={{position:"relative"}}>
                <h1 style={{textAlign:"center",position:"absolute",top:"10px",left:"50%",transform:"translate(-50%,0)"}}>Contact Us</h1>
                <ClearIcon onClick={closee} style={{fontSize:'4rem',position:"absolute",right:"10px",top:"4px"}}/>
                </div>

            {/* form */}

            <input onChange={changi} className="inpu" style={{marginTop: "50px"}}  type="text" placeholder="Name"  name="name" value={init.name}/>

<input onChange={changi} className="inpu" type="number" placeholder="Mobile"  name="mobile" style={{marginTop: "30px",height:"4rem"}} value={init.mobile}/>

<input onChange={changi} className="inpu" type="email" placeholder="E-mail" style={{marginTop: "30px",height:"4rem"}} name="email" value={init.email}/>

<textarea onChange={changi} style={{height:"7rem"}}  className="textA" placeholder="Message" name="message" value={init.message}></textarea>

<input onClick={clicky} className="clickk" type="submit" style={{width: '80px',height:"4rem",border: 'none',backgroundColor:'black',borderRadius: '10px',marginTop:"20px",marginLeft:"50%",transform: 'translate(-50%)',color:'white',fontSize:"1.5rem"}}/>









            </div>


          <ChatBubbleIcon onClick={openn} style={{width:'5rem',height:"5rem",color:"rgb(205, 186, 109)",position:"fixed",left:"20px",bottom:"14px",cursor:"pointer",zIndex:"999999"}}/>  
        </div>
    )
}
