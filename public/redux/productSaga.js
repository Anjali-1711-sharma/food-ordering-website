
import { takeEvery,put } from "redux-saga/effects";

function* getProductDetails(){
  try{
    let data = yield fetch('http://localhost:5000/api/products');
    data= yield data.json();
    yield put({type:"SET_PRODUCT_LIST",data})
  } catch (e){
       console.log("error in saga",e);
  }
}

function* productSaga(){
   yield takeEvery("GET_PRODUCT_LIST",getProductDetails)
}
export default productSaga;