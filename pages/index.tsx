import { useEffect, useState } from "react";
import Link from 'next/link';
import axios from "axios";
import { useRouter } from 'next/router';
import { useSelector } from "react-redux" ;
import ConfirmationModal from "./confirmationModal";

const signUp=()=>{

    const router = useRouter();

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [userName,setUserName]=useState("");
    const [mobile,setMobile]=useState("");
    const [isUserCreated,setUserCreated]=useState(false);
    const [redirectToHome,setRedirectToHome]=useState(false);
   
    useEffect(()=>{
        if(isUserCreated){
            setRedirectToHome(true);
        }
    },[isUserCreated]);

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
            name : userName,
            email : email,
            password : password,
            phone : mobile
         }
         try{
            
            const response = await axios({
                method:"POST",
                url: "/api/customers/createCustomer",
                headers: {
                    "Content-Type": "application/json",
                },
                data:JSON.stringify(data)
            });
            const { data : responseData, status, statusText } = response;
            if(statusText == "Created" && status == 201){
                setUserCreated(true);
            }
         } catch(error){
             console.log("error in finding customer :",error);
         }
         
    };
   
     return(
        <div className=" w-screen h-screen relative overflow-scroll text-black flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300"> 
         { isUserCreated && <ConfirmationModal fromLogin={false}/> }
        <div className={`w-screen h-screen flex items-center justify-center transition-opacity duration-500 ${isUserCreated ? 'bg-opacity-50' : 'bg-opacity-100'}`}>
            <div className="h-2/3 w-80 sm:h-1/2 sm:w-1/2 lg:h-2/3 lg:w-1/3 xl:h-1/2 xl:w-1/3  rounded-lg shadow-2xl relative flex justify-center bg-white">

                <div className="absolute top-8 text-xl">Create Your Account</div>

                <div  className="absolute top-20 left-12">
                <label>Your Name</label><br/>
                <input type="text" id="userName" name="userName" value={userName} placeholder="Type your Name" onChange={(event)=>{setUserName(event.target.value)}}/> <br/>
                <label>Mobile No.</label><br/>
                <input type="tel" id="mobile" name="mobile" value={mobile} placeholder="Type your Mobile No." onChange={(event)=>{setMobile(event.target.value)}}/> <br/>
                <label>Email</label><br/>
                <input type="email" id="email" name="email" value={email} placeholder="Type your Email" onChange={(event)=>{setEmail(event.target.value)}}/> <br/>
                <label>Password </label> <br/>
                <input type="password" id="password" name="password" value={password} placeholder="Type Your Password" onChange={(event)=>{setPassword(event.target.value)}}/><br/>
                </div>
               
                <button onClick={handleSubmit} className="absolute top-72 w-1/2 border-2 border-black rounded-lg bg-gradient-to-r from-pink-200 to-purple-300 text-white">Register</button>

                <div className="absolute bottom-8 left-1/3  flex justify-center">
                <h2>Already registered ? <Link href="/login" className="m-5 text-center text-sky-500"> Login </Link> </h2> 
                </div>
            </div>
        </div>
        </div>
     )
}
export default signUp;
