const asynchandler = (requestHandler) => {
    (req, res, next) => { 
      Promise.resolve(requestHandler(req, res, next)).
      catch((err)=>next(err));
    }
  
}


// const asynchandler = (requestHandler) =>(req,res,next)=>{
//   try{

//   }
//   catch(err){
//     res.status(err.code || 500).json({
//       success:false,
//       message:err.message || "Internal Server Error"
//     })
//   }
// }

/*💡 Yeh Kya Hai aur Kyun Use Karte Hain?
Higher-Order Function (HOF): Yeh ek aisa function hai jo parameter mein ek doosre function (requestHandler) ko leta hai aur badle mein ek safe Express middleware function return karta hai.

Goodbye try...catch: Backend mein har ek controller (like login, register) ke andar baar-baar try...catch block likhne se bachne ke liye iska use kiya jata hai.

Automatic Error Catching: Yeh controller ke poore code ko ek Promise mein wrap kar deta hai. Agar code mein koi bhi error aati hai, toh yeh use automatic catch karke Express ke next middleware (next(err)) ko bhej deta hai, jisse server kabhi crash nahi hota.*/
export default asynchandler

