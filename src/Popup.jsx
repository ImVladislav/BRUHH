import React, { useState } from 'react';
import icon from './assets/rocket.png';

const FullscreenPopup = ({ setIsPlayMusic }) => {
   const [isOpen, setIsOpen] = useState(true);

   return (
      <>
         {isOpen && (
            <div className='fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50'>
               <div className='bg-white p-6 rounded-lg text-center w-full max-w-md mx-auto gap-8'>
                  <img
                     src={icon}
                     alt='Popup Content'
                     className='popup-img w-[200px] object-contain'
                    //  className='absolute w-full h-full object-cover'
                  />

                  <div className='flex justify-center gap-4 pt-8'>
                     <button
                        onClick={() => {
                           setIsPlayMusic(true);
                           setIsOpen(false);
                        }}
                        className='popup_close_btn'
                     >
                        ENTER
                     </button>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default FullscreenPopup;
