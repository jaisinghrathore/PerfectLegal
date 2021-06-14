const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../signUpBackend/SignUpModels')
const againSignUpTemplateCopy = require('../signUpBackend/AgainSignUpModels')


// const del= async () =>{
//     const dell=await againSignUpTemplateCopy.deleteMany({});
//     console.log(dell);
// }

// del()




router.post("/signup",(request, response) => {
    const signUpUser= new signUpTemplateCopy({
        name:request.body.name,
        mobile:request.body.mobile,
        email:request.body.email,
        message:request.body.message,
    })

    signUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(error=>{
        response.json(error)
    })

})


router.get("/signupshow",async(request, response) => {
 
    const signUpUser=await signUpTemplateCopy.find();
    response.send(signUpUser);
    console.log(signUpUser);


})



router.post("/againsignup",(request, response) => {
    const againSignUpUser= new againSignUpTemplateCopy({
        email:request.body.email
    })

    againSignUpUser.save()
    .then(dataa=>{
        response.json(dataa)
    })
    .catch(error=>{
        response.json(error)
    })

})






module.exports = router