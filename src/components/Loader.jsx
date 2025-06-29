// import Lottie from "lottie-react";
// import { DNA } from "react-loader-spinner";
// import LottieAnimation from "/public/loadingLottieAnimation.json";

// const Loader = () => {
//     return (
//         <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
//             <div className="text-center">
//                 {/* <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-white mx-auto"></div> */}
//                 {/* <Lottie style={{ width: '100px' }} animationData={LottieAnimation} loop={true} /> */}
//                 {/* <DNA
//                     visible={true}
//                     height="80"
//                     width="80"
//                     ariaLabel="dna-loading"
//                     wrapperStyle={{}}
//                     wrapperClass="dna-wrapper"
//                 /> */}

//                 <div className="w-24 h-24 relative z-10">
//           <div className="w-full h-full rounded-full border-4 border-[#ff0054] animate-spin-slow p-1 bg-white">
//             <img
//               src="https://i.ibb.co/qYw6pvz7/images.png"
//               alt="Yeasin Loader"
//               className="rounded-full object-cover w-full h-full"
//             />
//           </div>
//         </div>
//                 <p className="mt-4">Loading...</p>
//             </div>
//         </div>
//     );
// };

// export default Loader;


const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center text-white">
      {/* Inline animation for spin */}
      <style>
        {`
          @keyframes spin-slow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 6s linear infinite;
          }
        `}
      </style>

      {/* Avatar with rotating ring */}
      <div className="relative w-14 h-14 md:w-16 md:h-16">
        <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#ff0054] animate-spin-slow"></div>
        <img
          src="https://i.ibb.co/RGCtTLq4/image-removebg-preview.png"
          alt="Yeasin Avatar"
          className="rounded-full w-full h-full object-cover border-4 border-black"
        />
      </div>

      {/* Your Name as a Brand */}
      {/* <h2 className="text-xl font-bold text-[#ff0054] tracking-wider">Loading...</h2> */}
      <p className="mt-4">Loading...</p>
      {/* <p className="text-gray-400 mt-1 text-sm">Please wait a moment</p> */}
    </div>
  );
};

export default Loader;
