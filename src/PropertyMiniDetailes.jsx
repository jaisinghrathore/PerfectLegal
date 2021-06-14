import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {useParams} from "react-router-dom";
import Button from '@material-ui/core/Button';


export default function PropertyMiniDetailes() {
    React.useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    
    var valll1="";

    const{idd}=useParams();

    switch(idd){
        case "Sale":valll1="﻿A 'SALE DEED' is a legal document executed by the seller/ vendor and the purchaser/vendee which evidences the sale and transfer of ownership of an immovable property."
        break;
        case "Will":valll1="A will or testament is a legal document that expresses a person's (testator) wishes as to how their property (estate) is to be distributed after their death and as to which person (executor) is to manage the property until its final distribution. For the distribution (devolution) of property not determined by a will, see inheritance and intestacy."
        break;
        case "Rent":valll1="A rental agreement is a contract of rental, usually written, between the owner of a property and a renter who desires to have temporary possession of the property; it is distinguished from a lease, which is more typically for a fixed term. As a minimum, the agreement identifies the parties, the property, the term of the rental, and the amount of rent for the term. The owner of the property may be referred to as the lessor and the renter as the lessee"
        break;
        case "Relinquishment":valll1="A relinquishment deed is a legal document which has the effect of giving up or releasing the rights, titles and interest of a particular legal heir in favour of other legal heirs in a common property."
        break;
        case "Power":valll1="Power of Attorney, or POA, is a legal document giving an attorney-in-charge or legal agent the authority to act on behalf of the principal. ... A power of attorney comes into play in the event that the principal is incapacitated by an illness or disability."
        break;
        case "Transfer":valll1="A lease of immoveable property is a transfer of a right to enjoy such property, made for a certain time, express or implied, or in perpetuity, in consideration of a price paid or promised, or of money, a share of crops, service or any other thing of value, to be rendered periodically or on specified occasions to the transferor by the transferee, who accepts the transfer on such terms"
        break;
        case "SaleA":valll1="An agreement of sale constitutes the terms and conditions of sale of a property by the seller to the buyer. These terms and conditions include the amount at which it is to be sold and the future date of full payment."
        break;
        case "Rectification":valll1="Rectification deed is a document executed between parties to correct a mistake in the principal deed. There must have been a bonafide mistake where the original deed does not reflect the true intention of parties to the deed."
        break;
        case "Partition":valll1="A partition is a logical division of a hard disk that is treated as a separate unit by operating systems  and file systems.A disk partition manager allows system administrators to create, resize, delete and manipulate partitions, while a partition table logs the location and size of the partition."
        break;
        case "Conveyance":valll1="Conveyance deed is a legal document that is used to transfer the title of property from one person to another as a gift, an exchange, a lease, a mortgage, etc. A gift deed, mortgage deed, lease deed or sale deed can also be called as a conveyance deed"
        break;
        case "Declaration":valll1="The Deed of Declaration (DoD) is a document that describes the property, i.e., the building, all of its apartments, the common facilities such as lifts, generators, fire fighting equipment, pool, gym etc., along with the ownership scheme giving the percentage share of each apartment."
        break;
        case "Exchange":valll1="WHAT IS EXCHANGE; SECTION 118 OF TRANSFER OF PROPERTY ACT, 1882 defines as “when two persons mutually transfer ownership of one thing for the ownership of another, neither thing or both things being money only, the transaction is called an “Exchange”."
        break;
        case "Surrender":valll1="In common law, surrender is the term describing a situation where a tenant gives up possession of property held under a tenancy as a result of which the tenancy ends.A surrender differs from an eviction on the question of mutual agreement. Surrender implies a mutual agreement, whereas eviction implies the absence of a mutual agreement."
        break;
        case "Award":valll1="Award means to give by judicial determination; to rule in favor of after an evaluation of the facts, evidence, or merits. The decision made by a panel of arbitrators or commissioners, a jury, or other authorized individuals in a controversy that has been presented for resolution."
        break;
        case "Cancellation":valll1="Any Will can be revoked and/or substituted by the testator any number of times at his prevail.Though it is not mandatory that every will should be probated, it is advisable to do so to ensure that the acts and deeds performed by the executor of the will cannot be challenged at a later date."
        break;

        default:var error=`There is no page With the name ${idd}`

    }   
    
    
        const[initia,upda]=useState(valll1);

    return (
        <>
        <Paper>
            <Grid container style={{zIndex:0}}>
            <Grid item xs={12} style={{height:"505px",backgroundImage:`url("https://attorco.themestek.com/demo1/wp-content/uploads/sites/4/2019/06/slider1-02.jpg")`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>Services Details</p>
            <h1  style={{textAlign:"center"}}  className="topu"> ABOUT {idd.toUpperCase()} CERTIFICATE</h1>
                </div>
            </Grid>
            <Grid style={{width: '100%',padding:'42px 20px 0 20px'}} item xs={12} container> 

            <Grid item xs={1}></Grid>

                <Grid item xs={10}>
                <h2 className="services" style={{fontSize:'4rem',textAlign:'center'}}>
                Some Details About {idd} Certificate 
                </h2>
                {error?
                <>
                <h1 style={{textAlign:'center',color:"red",marginBottom:"20px"}}>{error}</h1>
                <Button variant="outlined" style={{color:"red",borderColor:"#CDBA6D",width:"100px",height:'40px',position:'relative',left:"50%",fontSize:"1.5rem",transform:"translate(-50%)",marginBottom:"20px"}} onClick={window.history.back()}>
        goBack
      </Button>
                </>:""}
                <p style={{textAlign:"center",fontSize:"1.6rem"}}>
                    {initia}
                </p>
                </Grid>

                <Grid item xs={1}></Grid>

            </Grid>
            </Grid>  
</Paper>
        </>
    )
}
