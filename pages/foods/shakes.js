import { useDispatch } from "react-redux";
import { useSelector } from "react-redux" ;
import { addToCart,removeToCart } from "../../public/redux/action";
import {shake} from "../../public/foodcategories" ;
import Image from "next/image";
import Link from 'next/link';
import cart from "../../public/images/cart.png";

const shakes=()=>{
    const dispatch =useDispatch();
    const result=useSelector((state)=>state);
    const cartData = result.cartData ;
    console.log("result",result);
    return(
        <div className="w-screen h-full bg-white text-black">
        {/* header */}
        <div className="w-screen h-12 border-2 bg-grey-200  flex flex-row mt-0 relative">
       <Link href="/" className="absolute left-8 top-2 text-black">Home</Link>
       <Link href="/checkout" className="absolute right-10 z-0 top-2">
       <Image src={cart} alt="cart" className="h-10 w-12 "/>
       </Link>
       <div className="h-6 w-6 rounded-full bg-red-400 text-white text-center z-8 absolute right-6">{cartData.length}</div>
       </div>
        <div className="w-3/4 grid grid-cols-3 gap-2 mx-auto mt-10">
        {
                shake?.map((smoothie)=>{
                    const items={
                        "id":smoothie.id,
                        "name": smoothie.name,
                        "price": smoothie.price
                    }
                    return(
                        <div className="w-80 h-80 rounded-md shadow-2xl ml-5 relative">
                        {/* <Image src={smoothie.img} alt={smoothie.name} className="w-32 h-32 mx-auto mt-5" /> */}
                        <div className="mt-4 text-center">{smoothie.name}</div>
                        <div className="mt-2 text-center">Rs.{smoothie.price} for one</div>
                        <div className="h-24 w-24 mx-auto mt-5">
                        <button className="h-8 w-8  border-black border-2 text-center" onClick={()=>{ dispatch(addToCart(items)) }}> + </button>
                        <button className="h-8 w-8  border-black border-2 text-center ml-4" onClick={()=>{ dispatch(removeToCart(items)) }}> - </button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
    )
}
export default shakes;