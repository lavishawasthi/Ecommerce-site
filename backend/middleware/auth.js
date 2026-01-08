import jwt from 'jsonwebtoken'

const authUser=async (req,res,next)=>{

    const token=req.headers.token;
    
    
    if(!token){
        return res.json({sucess:false,message:'not authorised login again'})
    }

    try {
        // console.log(token)
        
        
        const token_decode=jwt.verify(token,process.env.JWT_SECRET)
        req.body.userId =token_decode.id 
        next()

    } catch (error) {
        console.log(error);
        res.json({sucess:false,message:error.message})
        
    }

}

export default authUser