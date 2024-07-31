const updateCustomer=async(req,res)=>{
    try{
        const customerDetail = await Customer.updateOne({email: req.body.email},{$set:{email: req.body.newEmail}});
        res.status(201).send(customerDetail);
    }catch(e){ res.status(400).send(e); }
};
export default updateCustomer;