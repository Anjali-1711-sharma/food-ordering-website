import { useEffect, useState } from "react";
import { useSelector } from "react-redux" ;
import Link from 'next/link';
//import checkoutPage from "../public/images/checkoutPage";

const Checkout =()=>{
  const result=useSelector((state)=>state);
  const [totalPrice,setTotalPrice] = useState(0);
  console.log("result",result);
  let items=new Object();
  result.cartData.map((data)=>{
     if(data.name in items){
      let count= items?.[data.name]?.count;
      let obj={"price":data.price,"count":count+1};
       items={
         ...items,
         [data.name]:obj
       }
     }else{
       let obj={"price":data.price,"count":1};
       items={
         ...items,
         [data.name]:obj
       }
     }
  })
  let sum=0;
  Object.entries(items).map((item)=>{
       
    sum=sum + (item[1].count * item[1].price);
  })
   useEffect(()=>{
     setTotalPrice(sum);
   },[sum])
   console.log("result2",items);
    return(
      <div className="bg-white w-screen h-screen flex flex-row relative bg-[url('../public/images/checkoutPage.png')] bg-cover">
      
        <div className="h-1/2 w-1/3  text-black   absolute top-44 left-52 text-center rounded-2xl shadow-lg bg-gradient-to-r from-cyan-100 to-teal-200">
          <div className="absolute top-4 left-40">Items in your cart</div>
          <div className=" text-black flex flex-col w-3/4 absolute top-20 left-16">
          {Object.entries(items).map((item)=>{
              return(
                <div className="flex flex-row ">
                <div >{item[0]}</div>
                <div className="absolute start-3/4">{item[1].count} * Rs. {item[1].price}</div>
                </div>
              )
            })}
          </div>
          <div className="absolute bottom-8 start-1/3 bg-yellow-300 pt-2 pb-2 pl-2 pr-2 text-black rounded-md shadow-md">Proceed to Checkout</div>
        </div>

        <div className="h-1/4 w-1/5  text-black absolute top-72 right-52 rounded-xl shadow-lg bg-purple-300 text-black">
           <div className="absolute top-4 left-24">Checkout</div>
           <div className="absolute top-16 left-8">SubTotal : {totalPrice}</div>
           <div className="absolute top-24 left-8">Delivery Charge : Rs.20</div>
           <div className="absolute top-32 left-8">Total : {totalPrice+20}</div>
        </div>

      {/* footer */}
       <Link href="/" className="absolute start-1/2 bottom-20 text-black rounded-lg pt-2 pb-2 pl-5 pr-5 bg-gradient-to-r from-rose-200 to-pink-400"> Back</Link>

      
      </div>
    )
}
export default Checkout;