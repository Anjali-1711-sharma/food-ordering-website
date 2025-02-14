import { Inter } from "next/font/google";
import { useDispatch } from "react-redux";
import { addToCart,removeToCart } from "../public/redux/action";
import Link from 'next/link';
import { useSelector } from "react-redux" ;
import Image from "next/image";
import cart from "../public/images/cart.png";
import { streetFoods } from "../public/foodcategories";
import southIndian from "../public/images/southIndian/idli.jpeg";
import juice from "../public/images/juices/mosambiJuice.jpeg";
import meal from "../public/images/meal.png";
import shake from "../public/images/milkshakes/chocolateMilkshake.jpeg";
import sweets from "../public/images/sweets/boondiLadoo.jpeg";
import chinese from "../public/images/chinese/hotPot.jpeg";
import deliverboy from "../public/images/deliveryboy.png";
import { useEffect, useState } from "react";
import { getProductList } from "../public/redux/productAction";

const inter = Inter({ subsets: ["latin"] });

const Home = () =>{
  
  const dispatch =useDispatch();
  const result=useSelector((state:any)=>state);

  useEffect(()=>{
    dispatch(getProductList()); //calling an api on page load ,not on btn click
  },[dispatch]);
  
  const cartData = result.cartData ;
  console.log("result",result);
  
   
    return (
       <div className="bg-white w-screen min-h-screen  flex flex-col items-center bg-[url('../public/images/homePageImg.avif')] bg-cover bg-center" >
       {/* header */}
       <div className="bg-white w-screen h-12 border-2 bg-grey-200  flex flex-row absolute top-0">
        <h1 className="absolute left-1/3 top-2 text-red-600">Welcome to Anjali's Food Cornor</h1>
       <Link href="/checkout" className="absolute right-10 z-0 top-2">
       <Image src={cart} alt="cart" className="h-10 w-12 "/>
       </Link>
       <div className="h-6 w-6 rounded-full bg-red-400 text-white text-center z-8 absolute right-6">{cartData.length}</div>
      </div>
      {/* delivery template */}
      <div className="h-32 w-72 absolute mt-20 right-12 text-black rounded-lg bg-gradient-to-r from-pink-200 to-purple-300">
        <p className="absolute left-4 top-2">Enjoy our deliveries at </p>
        <p className="absolute left-4 top-8">just Rs.20</p>
        <Image src={deliverboy} alt="deliveryboy" className="h-28 w-16 absolute top-2 right-4"/>
      </div>


      {/* food categories */}
      <div className="bg-stone-100 text-black shadow-md text-center mt-52" >
        <div>WHAT'S ON YOUR MIND?</div>

        <div className="flex flex-row">
        <Link href="/foods/juices" className="m-5 text-center">
        <Image src={juice} alt="juice" className="h-28 w-28"/>
        <p>Juices</p>
        </Link>
        <Link href="/foods/meals" className="m-5 text-center">
         <Image src={meal} alt="meal" className="h-28 w-28"/>
         <p>Meals</p>
        </Link>
        <Link href="/foods/sweets" className="m-5 text-center">
        <Image src={sweets} alt="sweets" className="h-28 w-28"/>
         <p> Sweets</p>
        </Link>
        </div>

        <div className="flex flex-row">
        <Link href="/foods/shakes" className="m-5 text-center">
        <Image src={shake} alt="shakes" className="h-28 w-28"/>
        <p>Shakes</p>
        </Link>
        <Link href="/foods/southIndian" className="m-5 text-center">
        <Image src={southIndian} alt="icecream" className="h-28 w-28"/>
        <p>South Indian</p>
        </Link>
        <Link href="/foods/chinese" className="m-5 text-center">
        <Image src={chinese} alt="chinese" className="h-28 w-28"/>
        <p>Chinese</p>
        </Link>
        </div>

      </div>
      
      {/* street foods */}
      {/* <div className="text-black absolut top-96">Enjoy our speciality at your home</div> */}
      <div className="w-3/4 h-72 mt-28 mb-8 bg-slate-100 overflow-x-auto flex flex-row text-black grid grid-cols-8 gap-x-72 ">
        {
                streetFoods?.map((food)=>{

                    const items={
                        "id":food.id,
                        "name": food.name,
                        "price": food.price
                    }
                    return(
                        <div className="w-60 h-60 rounded-md shadow-2xl m-5 relative" key={food.id}>
                        <Image src={food.img} alt={food.name} className="w-24 h-24 mx-auto mt-5" />
                        <div className="mt-2 text-center">{food.name}</div>
                        <div className="mt-2 text-center">Rs.{food.price} for one</div>
                        <div className="h-24 w-24 mx-auto mt-3">
                        <button className="h-8 w-8  border-black border-2 text-center" onClick={()=>{ dispatch(addToCart(items)) }}> + </button>
                        <button className="h-8 w-8  border-black border-2 text-center ml-4" onClick={()=>{ dispatch(removeToCart(items)) }}> - </button>
                        </div>
                        </div>
                    )
                })
      }

      </div>

      </div>
  );
}

export default  Home;