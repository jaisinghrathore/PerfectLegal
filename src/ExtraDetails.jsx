import React,{useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {useParams} from "react-router-dom";
import Button from '@material-ui/core/Button';
import Paper from "@material-ui/core/Paper"

export default function ExtraDetails() {

    var valll="";
    React.useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    
    const{id}=useParams();

    switch(id){
        case "Marriage":valll="A marriage certificate  is an official statement that two people are married. In most jurisdictions, a marriage certificate is issued by a government official only after the civil registration of the marriage. Marriage registration certificate is being provided by the SDM of the respective area or district."
        break;
        case "E-Stamping":valll="E-Stamp paper or electronic stamp paper is the result of electronic stamping which is an online application through which Stamp Duty can be securely paid to the Government. Most Govt. transactions require payment of non-judicial Stamp duty and doing it the conventional way would be time consuming."
        break;
        case "Attestation":valll="Attestation of a document is done by an authorized person or department who have an official seal and signature. Through attesting the certificates, the authority who issued the certificate gets confirmed about its validity and if any wrong information is given by the person it can be easily verified."
        break;
        case "Affidavits":valll="An affidavit is a voluntary declaration in writing by a person (the deponent) who executes, swears, verifies, affirms on oath. Such a person also declares that the contents mentioned in the said declaration are true and correct and nothing has been concealed or misstated therein."
        break;
        case "Partnership":valll="Partnership deed is an agreement between the partners of a firm that outlines the terms and conditions of partnership among the partners.The partnership deed serves this purpose. It specifies the various terms such as profit/loss sharing, salary, interest on capital, drawings, admission of a new partner, etc."
        break;
        case "Imdemnity":valll="An indemnity bond assures the holder of the bond, that they will be duly compensated in case of a possible loss. This bond is an agreement that protects the lender from loss if the borrower defaults on a legally binding loan.If not signed, the surety bond will not be approved."
        break;
        case "Succession":valll="Succession certificate is a document issued by a competent court (civil) certifying a rightful person to be the successor of a deceased person. This certificate authorizes successor(s) to realize debts and securities of the deceased person."
        break;

        default:var error=`There is no page With the name ${id}`

    }   
    
    
        const[initia,upda]=useState(valll);



       


    return (
        <>
        <Paper>
<Grid container style={{zIndex:0}}>
            <Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/2019/06/slider1-02.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>Services</p>
            <h1 className="topu" style={{textAlign: "center"}}>ALL ABOUT {id.toUpperCase()} CERTIFICATE</h1>
                </div>
            </Grid>
            <Grid style={{width: '100%',padding:'82px 50px 0 50px'}} item xs={12} container> 


                <Grid item xs={12}>
                <h2 className="services" style={{fontSize:'4rem',textAlign:'center'}}>
                Some Details About {id} Certificate
                </h2>
                {error?
                <>
                <h1 style={{textAlign:'center',color:"red",marginBottom:"20px"}}>{error}</h1>
                <Button variant="outlined" style={{color:"red",borderColor:"#CDBA6D",width:"100px",height:'40px',position:'relative',left:"50%",fontSize:"1.5rem",transform:"translate(-50%)",marginBottom:"20px"}} onClick={window.history.back()}>
        goBack
      </Button>
                </>:""}
                <div style={{padding:"10px 15px 30px 15px"}}>
                <p style={{fontSize:"1.5rem",textAlign:"center"}}>
                    {initia}
                </p>
                </div>
                </Grid>


            </Grid>
            </Grid>
            </Paper>  

        </>
    )
}
