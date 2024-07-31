import connectDB from "../../../lib/db";
import Customer from "../../../lib/Model/customer";

const getCustomer=async(req,res)=>{

    try{
        await connectDB();
        const query=req.query;
        const customerDetail = await Customer.find({email: query.email, password : query.password});
        console.log("anjali",customerDetail);
        res.status(201).send(customerDetail);
        //res.status(201).send({message:`get anjali ${query.email} and ${query.password}`});
    }catch(e){ res.status(400).send(e); }
};
export default getCustomer;