import React from 'react'
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Propertyi from "./images/Propertyi.jpg"
import PropertyLawCard from "./PropertyLawCard"
import PropertyLawCardDetale from './PropertyLawCardDetale'

export default function MainService() {
    React.useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
    
    return (
        <>
    <Paper>
        <Grid container style={{zIndex:0}}>
            <Grid item xs={12} style={{height:"505px",backgroundImage:`url(${Propertyi})`,backgroundSize:"100% 505px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
            <p className="top linky" style={{}}>WE FIGHT FOR JUSTICE</p>
            <h1 style={{textAlign:"center"}} className="topu">SEPCIAL  APPROACH , DEDICATED  ATTORNEYS</h1>
                </div>
            </Grid>
            <Grid style={{width: '100%',  padding:'82px 50px 0 50px'}} item xs={12} container spacing={3}> 
                
            {PropertyLawCardDetale.map((val)=>(
            <PropertyLawCard
            key={val.id}
            img={val.img}
            details={val.details}
            small={val.small}
        />
        ))}

                 </Grid>
                 </Grid>
                 </Paper>
        </>
    )
}
