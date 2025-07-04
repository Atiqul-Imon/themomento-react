import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

function HomeSlider() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const heroImage =
    "https://res.cloudinary.com/dac4gsvh0/image/upload/v1746817093/MomentoHeroImage_ob164v.jpg";

    const handleImageClick = (e) => {
      e.stopPropagation(); 
    };

  return (
    <div className="bg-black flex items-center py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="w-full lg:w-2/5 text-white text-center lg:text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-marcellus leading-snug">
              Elevate Your Photography Journey
            </h1>
            <Link to="/my-account/:userId">
                    <button className="inline-block px-4 py-2 mt-4 text-lg 
                     text-gray-900 bg-[#FFCB00] hover:bg-[#e6b800] transition-colors duration-300 font-pt-serif">
                      Join Momento Now
                    </button>
                  </Link>
          </div>

          {/* Image */}
          <div className="w-full lg:w-3/5">
            <div className="aspect-video w-full">
              <img
                src={heroImage}
                alt="Photography showcase"
                className="w-full h-full object-contain shadow-xl"
                onClick={() => setIsModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>

 {/* Modal for Hero Image */}
 {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 overflow-auto"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative">
            <button
              className="absolute -top-10 right-0 text-white hover:text-yellow-300 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setIsModalOpen(false);
              }}
            >
              <FaTimes className="text-3xl" />
            </button>
            <img
              src={heroImage}
              alt="Full Size Hero"
              onClick={handleImageClick}
              className="block max-w-full max-h-screen w-auto h-auto"
            />
          </div>
        </div>
      )}

    </div>
  );
}

export default HomeSlider;















// import React from "react";
// import { Link } from "react-router-dom";

// function HomeSlider() {
//   const heroImage =
//     "https://res.cloudinary.com/dac4gsvh0/image/upload/v1746817093/MomentoHeroImage_ob164v.jpg";

//   return (
//     <div
//       className="relative bg-cover bg-center text-white"
//       style={{ backgroundImage: `url(${heroImage})` }}
//     >
//       <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
//       <div className="relative container mx-auto px-4 py-32 md:py-48 flex flex-col items-center justify-center text-center">
//         <h1 className="text-4xl md:text-6xl font-bold font-marcellus leading-tight mb-4 shadow-lg">
//           Empowering Photographers, Everywhere.
//         </h1>
//         <p className="text-lg md:text-xl max-w-3xl mb-8 font-pt-serif shadow-md">
//           Free portfolios, expert photo reviews, and global exposure — helping talented photographers from every corner of the world turn passion into purpose.
//         </p>
//         <Link
//           to="/register"
//           className="inline-block px-8 py-4 text-lg font-semibold 
//                      text-gray-900 bg-[#FFCB00] hover:bg-[#e6b800] 
//                      transition-transform duration-300 transform hover:scale-105 rounded-sm shadow-xl font-pt-serif"
//         >
//           Start Your Journey
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default HomeSlider;
