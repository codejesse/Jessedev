import Lottie from "lottie-react";
import Counter from "../assets/Counter.json"
import { useState, useEffect } from "react";


const Loader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);

    return isLoading ? (
        <div className="h-[100vh] w-full m-auto bg-[#ffffff]">
            <Lottie className="h-[100vh]" animationData={Counter} loop={false} />
        </div>
    ) : (
        ""
    );
}

export default Loader;