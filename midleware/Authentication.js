
const jwt=require('jsonwebtoken')

const verification=(req,res,next)=>{
    const authorization=req.headers.authorization
    if(!authorization){
        res.status(403).json({message:'signin first'})
        return
    }
    const token=authorization.replace('Bearer ','').trim()
    jwt.verify(token,"I don't know",(error,user)=>{
        if(error){
            res.json({message:error.message})
            return
        }
        req.presentUser=user
        console.log(user)
        next()
    })
}

module.exports=verification