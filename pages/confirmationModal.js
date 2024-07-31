import ReactLoading from "react-loading";
import Image from "next/image";
import greenTickImg from "../public/images/greenTickImg.png";

const ConfirmationModal = ({fromLogin}) => {
    
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white h-60 w-60 sm:h-80 sm:w-80 rounded-lg shadow-2xl relative flex items-center justify-center flex-col text-black ">
               
                {fromLogin ? <h1 className="text-xl mt-4">LOGIN SUCCESSFUL</h1> : 
                <div className="mt-4 text-xl flex items-center justify-center flex-col">
                    <p>User Has been created</p>
                    <p>Successfully</p>
                </div>}
                <Image src={greenTickImg} alt="tick" className="h-28 w-28 "/>
                <ReactLoading
                type="spinningBubbles"
                color="#008000"
                height={100}
                width={50}
                />
                
            </div>
        </div>
    );
};


export default ConfirmationModal;