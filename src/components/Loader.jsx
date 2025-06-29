import Lottie from "lottie-react";
import { DNA } from "react-loader-spinner";
import LottieAnimation from "/public/loadingLottieAnimation.json";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
            <div className="text-center">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white mx-auto"></div>
                {/* <Lottie style={{ width: '100px' }} animationData={LottieAnimation} loop={true} /> */}
                {/* <DNA
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                /> */}
                <p className="mt-4">Loading...</p>
            </div>
        </div>
    );
};

export default Loader;