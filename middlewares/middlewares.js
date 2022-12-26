const looger = (req,res,next)=>{
        const currentdate = new Date().toLocaleDateString
         console.log(currentdate)
         return next()
     }