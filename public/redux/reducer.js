
export const cartData=(data=[],action)=>{
   
   switch(action.type){
      case "ADD_TO_CART":
        console.log("ADD_TO_CART condition",action);
        return [action.data,...data];

      case "REMOVE_TO_CART":
        console.log("REMOVE_TO_CART condition",action);
        const originalData = JSON.parse(JSON.stringify(data));
        let x=-1;
        originalData?.map((value,index)=>{
            if(value.id==action?.data.id){
              x=index;
            }
        })
        if(x!=-1) originalData.splice(x, 1);
        // const remainingItem=data.filter((item)=> item.id != action?.data.id);
        return originalData;

     default: return [...data];
   }
}