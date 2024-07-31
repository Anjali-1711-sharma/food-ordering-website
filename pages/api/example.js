
const customersApiHandler=(req, res)=>{

    const requestMethod = req.method;
    //const body = JSON.parse(req.body);
    switch (requestMethod) {
      case "POST":
        res
          .status(200)
          .json({ message: "You submitted the following data: ${body}" });
  
      // handle other HTTP methods
      default:
        res.status(200).json({ message: "Welcome to API Routes!" });
    }

  }

  export default customersApiHandler;

//we can also do like this


  // const GET=(req,res)=>{
//     return Response.json({message:"get anjali"});
// }
// const POST=(req,res)=>{
//     return Response.json({message:"post anjali"});
// }

// const DELETE=(req,res)=>{
//     return Response.json({message:"delete anjali"});
// }

// const PATCH=(req,res)=>{
//     return Response.json({message:"patch anjali"});
// }
// export {GET,POST,DELETE,PATCH}
  
  