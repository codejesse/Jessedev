import Lottie from "lottie-react";
import Counter from "../assets/Counter.json"


const Loader = () => {
    return (
        <div className="h-[100vh] w-full m-auto bg-[#ffffff]">
            <Lottie className="h-[100vh]" animationData={Counter} loop={false} />
        </div>
    );
}

export default Loader;