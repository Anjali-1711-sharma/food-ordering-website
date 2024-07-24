

export const productData=(data=[],action)=>{
    switch(action.type){
       case "SET_PRODUCT_LIST":                                    //no need to make action for this, we can directly call it in reducer
         return [action.data];
 
      default:
      return [...data];
    }
 }