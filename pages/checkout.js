import { useEffect, useState } from "react";
import { useSelector } from "react-redux" ;
import Link from 'next/link';
import Proceed from "../pages/proceed";
import { useRouter } from 'next/router';

const Checkout =()=>{

  const router = useRouter();
  const result=useSelector((state)=>state);
  const [totalPrice,setTotalPrice] = useState(0);
  const [proceedClicked,setProceedClicked] = useState(false);
  const [redirectToHome,setRedirectToHome] = useState(false);

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
   },[sum]);

   useEffect(()=>{
     if(redirectToHome){
      router.push('/home');
     }
   },[redirectToHome]);

   console.log("result2",items);//bg-gradient-to-r from-cyan-100 to-teal-200
    return(
      <div className="bg-white w-screen h-screen  flex flex-col xl:flex-row overflow-y-auto flex  justify-center items-center bg-[url('../public/images/mealsPageImg.avif')] bg-cover bg-center">
         {/* header */}
          <div className="bg-white w-screen h-12 border-2 bg-grey-200  flex flex-row absolute top-0">
            <h1 className="absolute left-1/3 top-2 text-red-600">Welcome to Checkout Page</h1>
            <Link href="/home" className="absolute left-8 top-2 text-black">Home</Link>
          </div>   

        <div className="h-1/2 w-80 md:h-1/2 md:w-96 lg:h-1/2 lg:w-1/2 xl:h-1/2 xl:w-1/3  mt-20 xl:mt-0 flex flex-col items-center relative text-black  text-center rounded-2xl shadow-lg bg-gradient-to-r from-cyan-300 to-blue-400 ">
          <div className="mt-4">Items in your cart</div>

          
          
          <div className="text-black flex flex-col  max-h-48 sm:max-h-68 md:max-h-80 w-3/4 mt-8  overflow-y-auto">
          { Object.keys(items).length === 0 ? <div> No items added in your cart</div> : null}
            {Object.entries(items).map((item) => {
              return (
                <div key={item[0]} className="flex justify-between">
                  <div className="whitespace-nowrap">{item[0]}</div>
                  <div className="whitespace-nowrap">{item[1].count} * Rs. {item[1].price}</div>
                </div>
              );
            })}
         
         
          {/* {Object.entries(items).map((item)=>{
              return(
                <div className="flex flex-row ">
                <div >{item[0]}</div>
                <div className="absolute start-3/4">{item[1].count} * Rs. {item[1].price}</div>
                </div>
              )
            })} */}
          </div>

          <div className="w-60 absolute bottom-4 bg-yellow-300 pt-2 pb-2 pl-2 pr-2 text-black rounded-md shadow-md" onClick={()=>{setProceedClicked(true)}}>Proceed to Checkout</div>
        </div>

         <div className="h-52 w-52 md:h-60 md:w-60 lg:h-60 lg:w-80 ml-8 mt-5 mb-4 xl:mt-0 xl:mb-0 text-black  rounded-xl shadow-lg bg-gradient-to-r from-emerald-300 to-teal-200 text-black ">
         
            <div className="text-center mt-4">Checkout</div>
            <ul className="ml-4 mt-4">
              <li>SubTotal : {totalPrice}</li>
              <li>Delivery Charge : Rs.20</li>
              <li>Total : {totalPrice+20}</li>
            </ul>
          </div>

       { proceedClicked ? <Proceed setProceedClicked={setProceedClicked} setRedirectToHome={setRedirectToHome}/> : null}
      
      </div>
    )
}
export default Checkout; //bg-[url('../public/images/checkoutPage.png')] bg-cover