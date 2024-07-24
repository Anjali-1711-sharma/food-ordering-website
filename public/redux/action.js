
export const addToCart=(data)=>{

    console.log("action called",data);
    return {
        type:"ADD_TO_CART",
        data:data
    }
}
export const removeToCart=(data)=>{

    console.log("action called",data);
    return {
        type:"REMOVE_TO_CART",
        data:data
    }
}