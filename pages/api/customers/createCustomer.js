
import connectDB from "../../../lib/db";
import Customer from "../../../lib/Model/customer";


const createCustomer=async(req ,res )=>{
    //saving received customer details in db i.e creating a customer
    
    if (req.method !== "POST") {
        return res.status(405).send({ message: "Only POST requests are allowed" });
    }

    try{                                         //using async await , try catch
        await connectDB();
        const user = new Customer(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    }catch(e){ 
        res.status(400).send(e); 
    }
}
export default createCustomer;