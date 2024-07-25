import { useEffect, useState } from "react";
import Link from 'next/link';
import { useSelector } from "react-redux" ;

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    
    const handleSubmit=()=>{
        //console.log("anjali submit",email,password);
        //call api to handlesubmit
    }

     return(
        <div className="bg-white w-screen h-screen relative overflow-scroll text-black flex items-center justify-center bg-gradient-to-r from-pink-200 to-purple-300"> 
            <div className="h-1/2 w-1/3  rounded-lg shadow-2xl relative flex justify-center bg-white">

                <div className="absolute top-8 text-xl">Login</div>

                <div  className="absolute top-20 left-12">
                <label>Email</label><br/>
                <input type="email" id="email" name="email" value={email} placeholder="Type your Email" onChange={(event)=>{setEmail(event.target.value)}}/> <br/>
                <label>Password </label> <br/>
                <input type="password" id="password" name="password" value={password} placeholder="Type Your Password" onChange={(event)=>{setPassword(event.target.value)}}/><br/>
                </div>
               
                <button onClick={handleSubmit} className="absolute top-52 w-1/2 border-2 border-black rounded-lg bg-gradient-to-r from-pink-200 to-purple-300 text-white">LOGIN</button>

                <div className="absolute bottom-8 left-1/3  flex justify-center">
                <h2>New User ? </h2> &nbsp;
                <Link href="/signUp" className="m-5 text-center text-sky-500"> Sign Up </Link>
                </div>
            </div>
        </div>
     )
}
export default Login;

