import {iceCream} from "../../public/foodcategories" ;
const icecreams=()=>{
    return(
        <>
        {
                iceCream?.map((cream)=>{
                    return(
                        <>
                        <p>{cream.id}</p>
                        <p>{cream.name}</p>
                        <p>{cream.price}</p>
                        </>
                    )
                })
            }
        </>
    )
}
export default icecreams;