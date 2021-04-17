import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      top:'50%',
      right:'50%',
      transform: "translate(-50%,-50%)",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '4px dashed #CDBA6D',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
     btn:{
        backgroundColor:"transparent",
        color:"white",
        border:"none"
    }
  }));
  
const Side=()=>{ 


    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };



    const body = (
        <div style={modalStyle} className={classes.paper} >
          <h2 style={{textAlign: 'center'}} id="simple-modal-title">CONTACT'S</h2>
          <p style={{textAlign: 'center',margin:"20px 0",fontSize:"1.5rem"}} id="simple-modal-description">
            CALL ME NOW +91 95997 49463
          </p>
          <p style={{textAlign: 'center',fontSize:"1.5rem"}} id="simple-modal-description">
            MAIL AT perfectdox1@gmail.com.
          </p>
        </div>
      );
    return(
        <>
        <div style={{width:"24px",height:"14rem",backgroundColor:"rgba(1,1,1,0.4)","top":"200px","right":"0px","borderRadius":"6px 0 0 6px",overflow:"hidden",position:"fixed",border:"1px solid #CDBA6D",zIndex:"999999"}}>
            <h5 style={{transform:"rotate(90deg)",color:"white",marginTop:"100%"}}>
            <button className={classes.btn} type="button" onClick={handleOpen}>
        CONTACT
</button>
 <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal></h5>
        </div>
        </>
    );
}


export default Side;