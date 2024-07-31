import Image from "next/image";
import ReactLoading from "react-loading";
import greenTickImg from "../public/images/greenTickImg.png";
import { useEffect, useState } from "react";

const Proceed = ({setProceedClicked,setRedirectToHome}) => {
    
    const [clicked,setClicked]=useState(false);
    useEffect(()=>{
        if(clicked){
            setTimeout(()=>{
                setProceedClicked(false);
                setRedirectToHome(true);
            },2000);
        }
    },[clicked])
    return (
        <div className="bg-black bg-opacity-50 w-screen h-screen flex items-center justify-center relative z-1">
            <div className="bg-white h-1/3 w-1/3 rounded-lg shadow-2xl relative flex items-center justify-center flex-col text-black ">
                <p className="absolute -top-6 h-12 w-12 bg-white rounded-full "></p>
                <Image src={greenTickImg} alt="tick" className="absolute -top-12 h-24 w-24"/>
                <h1 className="text-2xl">Thank You!</h1>   
                <p className="mt-4">Your Order has been taken by us.</p>
                <p>We will contact you soon.</p>
                <button className="bg-green-600 text-white absolute bottom-12 w-1/2" onClick={()=>{
                    setClicked(true);
                }}>Ok</button>
                <ReactLoading
                type="spinningBubbles"
                color={clicked ? "#008000" : "#FFFFFF"}
                height={100}
                width={50}
                /> 
            </div>
        </div>
    );
};


export default Proceed; 