const deleteCustomer=async(req,res)=>{
    try{
        const customerDetail = await Customer.deleteOne({email: req.body.email});
        res.status(201).send(customerDetail);
    }catch(e){ res.status(400).send(e); }
};

export default deleteCustomer;