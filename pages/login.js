import { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux" ;
import ConfirmationModal from "./confirmationModal";

const Login=()=>{

    const router = useRouter();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [customerFound,setCustomerFound]=useState(false);
    const [redirectToHome,setRedirectToHome]=useState(false);

    useEffect(()=>{
        if(customerFound){
            setRedirectToHome(true);
        }
    },[customerFound]);

    useEffect(()=>{
        if(redirectToHome){
            setTimeout(()=>{
            router.push('/home');
            },2000);
        }
    },[redirectToHome,router]);
    
    const handleSubmit=async()=>{
        // in get request ,we cannot pass body ,we pass data as query 
        const data={
           email : email,
           password : password
        }
        const queryString = new URLSearchParams(data).toString();
        const url = `/api/customers/getCustomer?${queryString}`;

         try{
            
            const response = await axios({
                method:"GET",
                url: url,
                headers: {
                    "Content-Type": "application/json",
                }
            });
            const { data : responseData, status, statusText } = response;
            if(responseData.length){
                setCustomerFound(true);
            }else{
                setCustomerFound(false);
            }
            console.log("anjali",responseData.length);
         } catch(error){
             console.log("error in searching customer :",error);
         } 
    }
    console.log("anjali2",customerFound);
     return(
        <div className="w-screen h-screen relative text-black flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300"> 
        { customerFound && <ConfirmationModal fromLogin={true}/> }
        <div className={`w-screen h-screen flex items-center justify-center transition-opacity duration-500 ${customerFound ? 'bg-opacity-50' : 'bg-opacity-100'}`}>
            <div className="h-96 w-80 lg:w-96  rounded-lg shadow-2xl relative flex justify-center bg-white">

                <div className="absolute top-8 text-xl">Login</div>

                <div  className="absolute top-20 left-12">
                <label>Email</label><br/>
                <input type="email" id="email" name="email" value={email} placeholder="Type your Email" onChange={(event)=>{setEmail(event.target.value)}}/> <br/>
                <label>Password </label> <br/>
                <input type="password" id="password" name="password" value={password} placeholder="Type Your Password" onChange={(event)=>{setPassword(event.target.value)}}/><br/>
                </div>
               
                <button onClick={handleSubmit} className="absolute top-52 w-1/2 border-2 border-black rounded-lg bg-gradient-to-r from-pink-200 to-purple-300 text-white">LOGIN</button>

                <div className="absolute bottom-8 left-1/3  flex justify-center">
                <p>New User ? <Link href="/" className="m-5 text-center text-sky-500"> Sign Up </Link> </p> 
                </div>
            </div>
        </div>
        </div>
     )
}
export default Login;

