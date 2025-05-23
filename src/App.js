import './App.css';
import heroClouds from './assets/hero-clouds.svg';
import logo from './assets/mainLogo.png';
import heroLogo from './assets/hero-logo.png';
import heroBruh from './assets/hero-bruh.svg';
import heroMsg from './assets/hero-message.png';
import heroBottom from './assets/hero-bottom.svg';
import aboutTop from './assets/about-top.svg';
import aboutClouds from './assets/about-clouds.svg';
import aboutBuildings from './assets/about-buildings.png';
import aboutBottom from './assets/about-bottom.png';
import aboutIllustration from './assets/about-illustration.svg';
import tokenomicsTop from './assets/tokenomics-top.svg';
import tokenomicsBottom from './assets/tokenomics-bottom.svg';
import faqWindow from './assets/faq-window.svg';
import faqIllustration from './assets/faq-illustration.svg';
import logo2 from './assets/logo_2.png';
import footerTop from './assets/footer-top.svg';
import FullscreenPopup from './Popup';
import { useEffect, useState } from 'react';
import music from './312312.mp3';
import play from './assets/play.png';
import pause from './assets/pause.png';
import t666 from './assets/t666.png';

function App() {
   const [isPlayMusic, setIsPlayMusic] = useState(false);
   const audio = new Audio(music);

   useEffect(() => {
      const handleEnded = () => {
         audio.currentTime = 0;
         audio.play();
      };

      if (isPlayMusic) {
         if (audio.paused) {
            audio.play();
         }
         audio.addEventListener('ended', handleEnded);
      } else {
         audio.pause();
         audio.currentTime = 0;
         audio.removeEventListener('ended', handleEnded);
      }

      return () => {
         audio.pause();
         audio.currentTime = 0;
         audio.removeEventListener('ended', handleEnded);
      };
   }, [isPlayMusic]);

   return (
      <>
         <button
            onClick={() => setIsPlayMusic((prev) => !prev)}
            className='fixed-music bottom-4 right-4 px-4 py-2 text-white rounded'
         >
            {!isPlayMusic ? (
               <img src={pause} alt='pause' />
            ) : (
               <img src={play} alt='play' />
            )}
         </button>
         <FullscreenPopup setIsPlayMusic={setIsPlayMusic}></FullscreenPopup>
         <div className='relative pt-12'>
            <img className='absolute' src={heroClouds} alt='' />
            <div className='relative container mx-auto z-10'>
               <div className='flex justify-between '>
                  <img src={logo} alt='' className='w-[150px] object-contain'/>
                  <div className='flex gap-4'>
                     <svg
                        onClick={() =>
                           (window.location.href =
                              'https://www.dextools.io/app/en/solana/pair-explorer/AEFFoxdWQHK2Sod7Wx6x8RC5cR4KRPVjVL6LNYt2w1mt')
                        }
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='header__btn cursor-pointer'
                     >
                        <g>
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M11.7023 1.69636C9.91509 2.62733 8.45294 3.41512 8.45325 3.44716C8.45405 3.52986 12.7425 5.70169 12.8947 5.6964C12.9639 5.69408 13.4662 5.46287 14.0108 5.18266L15.0012 4.67328L16.0828 5.22923L17.1643 5.78529L18.9355 4.98941C21.6044 3.79013 21.8816 3.65871 21.8381 3.61456C21.7805 3.55598 20.8232 3.04173 18.2261 1.67442C16.9709 1.01359 15.7527 0.365669 15.5188 0.234562C15.285 0.103455 15.0617 -0.00201238 15.0227 2.91459e-05C14.9837 0.00207067 13.4894 0.765427 11.7023 1.69636ZM3.86377 5.75539L2.00336 6.71636V10.9339C2.00336 13.2535 2.02779 15.1513 2.05775 15.1513C2.08761 15.1513 3.00294 14.7546 4.09177 14.2696L6.07145 13.3879V8.94235L7.03886 9.46941C7.78433 9.87518 8.53025 10.2801 9.27661 10.6843L10.5469 11.372L11.1122 11.1164C11.4667 10.9559 11.8205 10.7937 12.1736 10.6301C12.4464 10.503 13.1162 10.2013 13.6619 9.95958C14.2076 9.71771 14.7127 9.47449 14.7844 9.41906C14.8795 9.34543 13.7192 8.70425 10.4928 7.04744C8.06083 5.79854 5.99298 4.78069 5.89761 4.78557C5.80225 4.79045 4.88702 5.22681 3.86377 5.75539ZM22.1734 6.02526C20.9063 6.59726 19.8688 7.08813 19.8676 7.11612C19.8665 7.14408 20.5571 7.5547 21.4023 8.02847C22.2475 8.50235 22.9391 8.91539 22.9391 8.9465C22.9391 8.97754 22.1911 9.33993 21.2771 9.75197C20.363 10.1639 18.0524 11.2074 16.1424 12.0708L9.74263 14.9636C8.13277 15.6913 6.68166 16.3473 6.51796 16.4215C3.22972 17.91 2.32592 18.323 2.2018 18.3939C2.07699 18.4653 2.04872 18.88 2.02651 20.9615L2 23.4439L3.66367 24.2916L5.3273 25.1393L7.63419 24.0982C8.90301 23.5256 9.94107 23.0271 9.94107 22.9904C9.94107 22.9538 9.70661 22.801 9.42017 22.6508C9.1336 22.5006 8.54204 22.168 8.10547 21.9116C7.66893 21.6551 7.23363 21.4199 7.13806 21.3886C7.04253 21.3575 6.96574 21.3031 6.9673 21.2676C6.96889 21.2322 7.98474 20.7497 9.2246 20.1953C11.6328 19.1185 13.4757 18.2887 17.4323 16.4994C19.2015 15.6995 20.971 14.9001 22.7406 14.1012C24.2959 13.3992 26.1042 12.5793 26.7591 12.2792L27.9498 11.7336L27.9762 9.22287L28.0028 6.71221L26.3155 5.84612C25.3874 5.36982 24.5941 4.98128 24.5525 4.98269C24.5109 4.98401 23.4404 5.45311 22.1734 6.02526ZM27.4977 15.0831C27.249 15.2046 26.7579 15.432 26.4063 15.5884C26.0546 15.7448 25.3874 16.0459 24.9235 16.2576L24.0801 16.6422L24.0609 18.8465C24.0502 20.0588 24.0056 21.0453 23.9617 21.0389C23.8618 21.024 22.2811 20.2134 20.6922 19.3619C19.5454 18.7475 19.4734 18.7231 19.2039 18.8565C19.0481 18.9337 18.1169 19.3513 17.1346 19.7847C16.1523 20.2181 15.3166 20.6009 15.2773 20.6356C15.2381 20.6702 17.2151 21.7417 19.6707 23.0169L24.1354 25.3353L26.0426 24.3487C27.0915 23.8061 27.9834 23.3112 28.0245 23.249C28.1169 23.109 28.109 14.8431 28.0164 14.8543C27.9798 14.8586 27.7463 14.9617 27.4977 15.0831ZM16.9362 24.7852C16.6054 24.9275 16.2746 25.0699 15.944 25.2125C14.9455 25.6445 15.1412 25.6588 13.9533 25.0675C13.1621 24.6736 12.8211 24.5521 12.673 24.6111C12.562 24.6553 11.6064 25.0853 10.5493 25.5665C9.49229 26.0477 8.59076 26.4414 8.54592 26.4414C8.10242 26.4414 8.83972 26.8819 11.6848 28.3171L15.0214 30L16.4253 29.3069C17.1974 28.9257 18.7548 28.1624 19.8862 27.6106C21.0175 27.0587 21.9292 26.5928 21.9121 26.5753C21.895 26.5578 20.947 26.071 19.8055 25.4935L17.73 24.4438L16.9362 24.7852Z'
                              fill='currentColor'
                           ></path>
                        </g>
                     </svg>
                     <svg
                        onClick={() =>
                           (window.location.href = 'https://t.me/BruuuhSol')
                        }
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='header__btn cursor-pointer'
                     >
                        <path
                           fill-rule='evenodd'
                           clip-rule='evenodd'
                           d='M26.0414 4.70151C25.6333 3.70363 25.6333 3.70364 25.6332 3.70365L25.633 3.70373L25.5731 3.72823C25.5339 3.74432 25.476 3.76798 25.4019 3.79833C25.2537 3.85902 25.0403 3.94647 24.7793 4.05352C24.2573 4.26761 23.5449 4.56016 22.7836 4.87395C21.2704 5.49762 19.5497 6.2109 18.7535 6.55579C16.7144 7.40277 12.762 9.02622 9.31532 10.4396C7.59034 11.147 5.99279 11.8014 4.82648 12.279C4.24333 12.5178 3.768 12.7124 3.43846 12.8472C3.2737 12.9147 3.14538 12.9672 3.05826 13.0028L2.92612 13.0569C2.17266 13.3516 1.59295 13.6863 1.20132 14.0923C0.772329 14.537 0.55564 15.0904 0.64479 15.6748C0.723169 16.1886 1.01359 16.5472 1.19441 16.7328C1.29365 16.8346 1.38801 16.913 1.45878 16.9671C1.49476 16.9946 1.52627 17.017 1.55139 17.0342C1.564 17.0428 1.57512 17.0502 1.58455 17.0564C1.58926 17.0595 1.59357 17.0622 1.59743 17.0647C1.59936 17.0659 1.60118 17.0671 1.60289 17.0682L1.60537 17.0697L1.60655 17.0704C1.60712 17.0708 1.60768 17.0712 2.17792 16.1562L1.60768 17.0712L1.71245 17.1365L1.82926 17.1764L2.17792 16.1562C1.82926 17.1764 1.82929 17.1764 1.82932 17.1764L1.82943 17.1764L1.82983 17.1766L1.85757 17.186C1.87587 17.1923 1.90281 17.2014 1.93774 17.2133C2.0076 17.237 2.1094 17.2714 2.23783 17.3146C2.49463 17.401 2.85815 17.5225 3.28577 17.6632C4.13959 17.9441 5.25488 18.3033 6.28821 18.6124C7.46997 18.9659 8.42192 18.9583 9.11342 18.836C9.45625 18.7754 9.72811 18.6878 9.92607 18.6079C10.0249 18.568 10.1053 18.5301 10.1667 18.4985C10.1975 18.4827 10.2235 18.4684 10.2448 18.4563C10.2555 18.4502 10.265 18.4447 10.2733 18.4397C10.2774 18.4373 10.2813 18.4349 10.2848 18.4328C10.2866 18.4317 10.2883 18.4306 10.2899 18.4296L10.2923 18.4282L10.2935 18.4274C10.294 18.4271 10.2946 18.4267 9.72442 17.5117L10.2946 18.4267L10.305 18.4203L10.3152 18.4136L9.72442 17.5117C10.3152 18.4136 10.3153 18.4135 10.3153 18.4135L10.3155 18.4134L10.3705 18.3773C10.4068 18.3535 10.4605 18.3182 10.5306 18.2722C10.6706 18.1801 10.8759 18.045 11.1373 17.8725C11.66 17.5276 12.4071 17.0332 13.3051 16.4349C14.342 15.7441 15.5808 14.9144 16.9084 14.0161C15.6921 15.1701 14.4014 16.3748 13.2209 17.4536C12.4887 18.0965 12.1214 18.8801 12.2547 19.715C12.373 20.4563 12.8513 20.9725 13.1715 21.246L13.174 21.2482L13.1766 21.2503C14.115 22.0419 15.8159 23.2105 17.268 24.1785C18.0036 24.6688 18.6915 25.1182 19.2106 25.4565C19.2783 25.5006 19.343 25.5427 19.4045 25.5828C19.5795 25.6968 19.7285 25.7938 19.8469 25.8714C20.0027 25.9735 20.0735 26.0212 20.0891 26.0317C20.3497 26.2342 20.9705 26.6364 21.6814 26.9635C22.0539 27.1349 22.4825 27.3005 22.9227 27.4028C23.3515 27.5025 23.8701 27.561 24.384 27.4404C25.4504 27.1903 25.9739 26.3546 26.2106 25.7925C26.3347 25.498 26.4058 25.223 26.4463 25.0248C26.467 24.9241 26.4805 24.8391 26.4893 24.776C26.4933 24.7467 26.4964 24.7218 26.4986 24.7021L26.5337 24.4814C26.5595 24.3195 26.5972 24.0826 26.645 23.7824C26.7406 23.182 26.8765 22.3285 27.038 21.3162C27.3609 19.2915 27.7858 16.6316 28.1936 14.0903L28.1943 14.0856L28.195 14.0808C28.3403 13.1218 28.4871 12.1722 28.6256 11.2774C28.9958 8.88395 29.3053 6.88292 29.3597 6.14313C29.4239 5.4002 29.2925 4.70244 28.8403 4.17298C28.3895 3.64514 27.7867 3.48044 27.3328 3.44108C26.8801 3.40182 26.4558 3.47381 26.175 3.5395C26.0282 3.57386 25.9046 3.61037 25.8155 3.6391C25.7706 3.65356 25.7337 3.66628 25.7062 3.67614C25.6923 3.68107 25.6808 3.68531 25.6717 3.6887C25.6671 3.6904 25.6632 3.69189 25.6599 3.69316L25.6553 3.69489L25.6526 3.69596C25.6522 3.69612 25.6518 3.69627 26.0414 4.70151ZM26.4327 5.70631L26.3898 5.72383C26.3507 5.73985 26.293 5.76345 26.2191 5.79374C26.0712 5.8543 25.8581 5.9416 25.5975 6.04849C25.0763 6.26227 24.3651 6.55433 23.6052 6.86751C22.0809 7.49578 20.3744 8.20332 19.6035 8.53748L19.5959 8.54076L19.5883 8.54393C17.5459 9.39227 13.5832 11.02 10.1334 12.4346C8.40801 13.1422 6.81012 13.7967 5.64359 14.2744C5.06032 14.5133 4.58487 14.7079 4.25524 14.8428C4.09043 14.9103 3.96207 14.9628 3.8749 14.9985L3.74229 15.0527L3.74189 15.0529C3.74185 15.0529 3.74182 15.0529 3.70776 14.9697L3.72468 15.0599C3.46297 15.1617 3.26575 15.2551 3.11855 15.3358C3.3488 15.4129 3.63552 15.5083 3.95958 15.6149C4.80546 15.8932 5.89978 16.2456 6.90608 16.5466C7.76394 16.8032 8.37563 16.7768 8.73786 16.7127C8.92189 16.6802 9.04942 16.6365 9.11914 16.6083C9.14214 16.5991 9.15893 16.5914 9.16942 16.5864L9.18755 16.5745C9.22335 16.551 9.27659 16.5161 9.34612 16.4704C9.48519 16.379 9.68942 16.2445 9.94965 16.0728C10.4701 15.7294 11.2146 15.2367 12.1097 14.6404C13.9002 13.4475 16.292 11.8409 18.6996 10.1845L18.7027 10.1824L18.7057 10.1803C19.5748 9.59115 20.2573 9.21126 20.7857 9.0299C21.0399 8.94266 21.3689 8.86142 21.7126 8.90439C22.1273 8.95622 22.5673 9.20035 22.7717 9.69538C22.9322 10.0842 22.8686 10.4539 22.8191 10.6497C22.7623 10.8746 22.6679 11.0846 22.5734 11.2601C22.384 11.6117 22.116 11.9673 21.8395 12.2429L21.8395 12.243C20.0584 14.0186 17.1232 16.8086 14.667 19.0531L14.6578 19.0615L14.6484 19.0697C14.465 19.2297 14.4068 19.3351 14.3909 19.3715C14.3889 19.3761 14.3875 19.3797 14.3865 19.3824C14.3904 19.3927 14.3995 19.4127 14.4198 19.4426C14.4543 19.4932 14.5061 19.5499 14.5698 19.6046C15.3998 20.3042 16.9943 21.4047 18.4639 22.3843C19.19 22.8682 19.8703 23.3127 20.3879 23.65C20.4579 23.6956 20.5263 23.7402 20.5924 23.7832C20.9839 24.0381 21.2942 24.2402 21.3842 24.3075L21.3975 24.3175L21.4106 24.3279C21.505 24.4032 21.9898 24.7319 22.5828 25.0047C22.8732 25.1384 23.1584 25.2439 23.4109 25.3025C23.6748 25.3639 23.8275 25.3562 23.8916 25.3412C23.981 25.3202 24.1033 25.2408 24.2234 24.9556C24.2778 24.8265 24.3129 24.6948 24.3339 24.5922C24.3441 24.5425 24.3502 24.5036 24.3534 24.4804C24.3548 24.4704 24.3556 24.4635 24.356 24.4603C24.356 24.4598 24.3561 24.4594 24.3561 24.4591C24.3561 24.4591 24.3561 24.4591 24.3561 24.4591L24.3587 24.4291L24.3647 24.3914L25.4294 24.5607C24.3647 24.3914 24.3647 24.3913 24.3647 24.3913L24.3647 24.3911L24.4043 24.1425C24.43 23.9806 24.4677 23.7436 24.5156 23.4433C24.6112 22.8428 24.7472 21.9891 24.9087 20.9766C25.2314 18.9528 25.6561 16.2941 26.0638 13.7532C26.2212 12.7142 26.3766 11.7088 26.52 10.7816C26.88 8.45343 27.1639 6.61793 27.2096 5.97989L27.2103 5.97095L27.2111 5.96202C27.2286 5.76367 27.214 5.65168 27.2006 5.59618C27.1867 5.59369 27.169 5.59121 27.1465 5.58926C27.0129 5.57768 26.8381 5.59885 26.6663 5.63904C26.5869 5.65762 26.5208 5.67723 26.4769 5.69138C26.4562 5.69807 26.4411 5.70331 26.4327 5.70631ZM27.2421 5.60745C27.242 5.60753 27.2404 5.60694 27.2377 5.60545C27.2408 5.60662 27.2422 5.60737 27.2421 5.60745ZM27.188 5.55643C27.1857 5.55289 27.1848 5.55091 27.185 5.5508C27.1851 5.5507 27.1862 5.55247 27.188 5.55643ZM26.0414 4.70151L25.6518 3.69627L25.6425 3.69986L25.6333 3.70363L26.0414 4.70151ZM21.5691 11.0453C21.5691 11.0454 21.5681 11.0456 21.5661 11.0459C21.5682 11.0455 21.5691 11.0453 21.5691 11.0453Z'
                           fill='currentColor'
                        ></path>
                     </svg>

                     <svg
                        onClick={() =>
                           (window.location.href = 'https://x.com/BruuuhSol')
                        }
                        width='30'
                        height='30'
                        viewBox='0 0 30 30'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        className='header__btn cursor-pointer'
                     >
                        <path
                           d='M21.8879 3.76904H25.5679L17.4879 13.7021L26.9279 27.1766H19.5199L13.7199 18.9883L7.07992 27.1766H3.39992L11.9599 16.5525L2.91992 3.76904H10.5119L15.7519 11.2491L21.8879 3.76904ZM20.5999 24.8445H22.6399L9.43992 6.01479H7.24792L20.5999 24.8445Z'
                           fill='currentColor'
                        ></path>
                     </svg>
                  </div>
               </div>
            </div>
            <div className='relative w-full flex flex-col justify-center items-center gap-8 z-10 mt-16'>
               <img className='hero__logo' src={heroLogo} alt='' />
               <button
                  onClick={() =>
                     (window.location.href =
                        'https://raydium.io/swap/?inputMint=sol&outputMint=aHAzZiavy46S4Wzj5qc9sPk4ziokZEAcCML5cfFpump')
                  }
                  className='hero__btn'
               >
                  BUY $BRUHH
               </button>
               <div className='relative z-10 top-0 md:top-[-100px] mt-12'>
                  <img className='' src={heroBruh} alt='' />
                  <img
                     className='absolute top-[120px] md:top-[-120px] w-1/3 md:w-full left-[200px] md:left-[320px]'
                     src={heroMsg}
                     alt=''
                  />
               </div>
               <img className='hero__bottom' alt='' src={heroBottom} />
            </div>

            <section className='about' id='about'>
               <img className='about__top' src={aboutTop} alt='' />
               <img className='about__clouds' src={aboutClouds} alt='' />
               {/* <div className='about__clouds' /> */}
               <img className='about__buildings' src={aboutBuildings} alt='' />
               <div className='about__container container'>
                  <div className='about__left'>
                     <span className='about__badge'>bruhh’s mission</span>
                     <p className='about__text'>
                        Meet $BRUHH, the lazy green monster that doesn't give a
                        damn about anything or anyone. $BRUHH is sick of
                        watching meme tokens recently bleed to zero and be left
                        with a true $BRUHH moment. He decided to launch his own
                        memetoken $BRUHH. Powered by the legendary Mike
                        Wazowski $BRUHH face, our mission is simple. Spread the
                        $BRUHH energy far and wide. Let's make every $BRUHH
                        moment count. BRUHH. BRUHH. BRUHH. BRUHH. BRUHH.
                        BRUHH.
                     </p>
                     <span className='about__label'>Contract address</span>
                     <div className='about__row'>
                        <p className='about__contract'>
                        aHAzZiavy46S4Wzj5qc9sPk4ziokZEAcCML5cfFpump
                        </p>
                        <button
                           onClick={() => {
                              navigator.clipboard
                                 .writeText(
                                    'aHAzZiavy46S4Wzj5qc9sPk4ziokZEAcCML5cfFpump'
                                 )
                                 .then(() => {
                                    alert('Copied to clipboard!');
                                 })
                                 .catch((err) => {
                                    console.error('Failed to copy: ', err);
                                 });
                           }}
                           className='about__copy'
                        >
                           Copy
                        </button>
                     </div>
                  </div>
                  <img
                     className='about__right'
                     src={aboutIllustration}
                     alt=''
                  />
               </div>
               <img className='about__bottom' src={aboutBottom} alt='' />
            </section>
            <section class='tokenomics' id='tokenomics'>
               <img class='tokenomics__top' src={tokenomicsTop} alt='' />
               <div class='tokenomics__container container hidden md:flex'>
                  <img src={t666} className='w-1/3 ml-[40px] object-contain' alt='' />
                  <canvas
                     class='tokenomics__illustration'
                     width='2048'
                     height='2048'
                  ></canvas>
                  <div class='tokenomics__border'>
                     <div class='tokenomics__inner'>
                        <h2 class='tokenomics__title'>Tokenomics of $bruhh</h2>
                        <div class='tokenomics__list'>
                           <div class='tokenomics__item'>
                              <span>LIQUIDITY</span>
                              <strong>Burned</strong>
                           </div>
                           <div class='tokenomics__item'>
                              <span>BUY/SELL TAX</span>
                              <strong>0%</strong>
                           </div>
                           <div class='tokenomics__item'>
                              <span>supply</span>
                              <strong>1B</strong>
                           </div>
                           <div class='tokenomics__item'>
                              <span>OWNERSHIP</span>
                              <strong>RENOUNCED</strong>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <img class='tokenomics__bottom' src={tokenomicsBottom} alt='' />
            </section>

            <section class='faq' id='faq'>
               <img class='faq__window' src={faqWindow} alt='' />
               <div class='faq__container container'>
                  <div class='faq__col'>
                     <iframe
                        src='https://jup.ag/swap/SOL-aHAzZiavy46S4Wzj5qc9sPk4ziokZEAcCML5cfFpump'
                        height='500px'
                        width='100%'
                        data-ruffle-polyfilled=''
                     ></iframe>
                  </div>
                  <img class='faq__illustration' src={faqIllustration} alt='' />
               </div>
            </section>
            <footer class='footer'>
               <img class='footer__top' src={footerTop} alt='' />
               <div class='footer__container container'>
                  <a
                     class='footer__logo'
                     href='/web/20240829115258/https://bruheth.com/'
                  >
                     <img src={logo2} alt='Bruhh' className='w-[150px] object-contain'/>
                  </a>
                  <nav class='footer__nav'>
                     <a href='#home'>Home</a>
                     <a href='#about'>About</a>
                     <a href='#tokenomics'>Tokenomics</a>
                     <a href='#faq'>BUY</a>
                  </nav>
                  <div class='footer__socials'>
                     <a
                        class='footer__btn'
                        target='_blank'
                        href='https://www.dextools.io/app/en/solana/pair-explorer/AEFFoxdWQHK2Sod7Wx6x8RC5cR4KRPVjVL6LNYt2w1mt'
                     >
                        <svg
                           width='30'
                           height='30'
                           viewBox='0 0 30 30'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <g>
                              <path
                                 fill-rule='evenodd'
                                 clip-rule='evenodd'
                                 d='M11.7023 1.69636C9.91509 2.62733 8.45294 3.41512 8.45325 3.44716C8.45405 3.52986 12.7425 5.70169 12.8947 5.6964C12.9639 5.69408 13.4662 5.46287 14.0108 5.18266L15.0012 4.67328L16.0828 5.22923L17.1643 5.78529L18.9355 4.98941C21.6044 3.79013 21.8816 3.65871 21.8381 3.61456C21.7805 3.55598 20.8232 3.04173 18.2261 1.67442C16.9709 1.01359 15.7527 0.365669 15.5188 0.234562C15.285 0.103455 15.0617 -0.00201238 15.0227 2.91459e-05C14.9837 0.00207067 13.4894 0.765427 11.7023 1.69636ZM3.86377 5.75539L2.00336 6.71636V10.9339C2.00336 13.2535 2.02779 15.1513 2.05775 15.1513C2.08761 15.1513 3.00294 14.7546 4.09177 14.2696L6.07145 13.3879V8.94235L7.03886 9.46941C7.78433 9.87518 8.53025 10.2801 9.27661 10.6843L10.5469 11.372L11.1122 11.1164C11.4667 10.9559 11.8205 10.7937 12.1736 10.6301C12.4464 10.503 13.1162 10.2013 13.6619 9.95958C14.2076 9.71771 14.7127 9.47449 14.7844 9.41906C14.8795 9.34543 13.7192 8.70425 10.4928 7.04744C8.06083 5.79854 5.99298 4.78069 5.89761 4.78557C5.80225 4.79045 4.88702 5.22681 3.86377 5.75539ZM22.1734 6.02526C20.9063 6.59726 19.8688 7.08813 19.8676 7.11612C19.8665 7.14408 20.5571 7.5547 21.4023 8.02847C22.2475 8.50235 22.9391 8.91539 22.9391 8.9465C22.9391 8.97754 22.1911 9.33993 21.2771 9.75197C20.363 10.1639 18.0524 11.2074 16.1424 12.0708L9.74263 14.9636C8.13277 15.6913 6.68166 16.3473 6.51796 16.4215C3.22972 17.91 2.32592 18.323 2.2018 18.3939C2.07699 18.4653 2.04872 18.88 2.02651 20.9615L2 23.4439L3.66367 24.2916L5.3273 25.1393L7.63419 24.0982C8.90301 23.5256 9.94107 23.0271 9.94107 22.9904C9.94107 22.9538 9.70661 22.801 9.42017 22.6508C9.1336 22.5006 8.54204 22.168 8.10547 21.9116C7.66893 21.6551 7.23363 21.4199 7.13806 21.3886C7.04253 21.3575 6.96574 21.3031 6.9673 21.2676C6.96889 21.2322 7.98474 20.7497 9.2246 20.1953C11.6328 19.1185 13.4757 18.2887 17.4323 16.4994C19.2015 15.6995 20.971 14.9001 22.7406 14.1012C24.2959 13.3992 26.1042 12.5793 26.7591 12.2792L27.9498 11.7336L27.9762 9.22287L28.0028 6.71221L26.3155 5.84612C25.3874 5.36982 24.5941 4.98128 24.5525 4.98269C24.5109 4.98401 23.4404 5.45311 22.1734 6.02526ZM27.4977 15.0831C27.249 15.2046 26.7579 15.432 26.4063 15.5884C26.0546 15.7448 25.3874 16.0459 24.9235 16.2576L24.0801 16.6422L24.0609 18.8465C24.0502 20.0588 24.0056 21.0453 23.9617 21.0389C23.8618 21.024 22.2811 20.2134 20.6922 19.3619C19.5454 18.7475 19.4734 18.7231 19.2039 18.8565C19.0481 18.9337 18.1169 19.3513 17.1346 19.7847C16.1523 20.2181 15.3166 20.6009 15.2773 20.6356C15.2381 20.6702 17.2151 21.7417 19.6707 23.0169L24.1354 25.3353L26.0426 24.3487C27.0915 23.8061 27.9834 23.3112 28.0245 23.249C28.1169 23.109 28.109 14.8431 28.0164 14.8543C27.9798 14.8586 27.7463 14.9617 27.4977 15.0831ZM16.9362 24.7852C16.6054 24.9275 16.2746 25.0699 15.944 25.2125C14.9455 25.6445 15.1412 25.6588 13.9533 25.0675C13.1621 24.6736 12.8211 24.5521 12.673 24.6111C12.562 24.6553 11.6064 25.0853 10.5493 25.5665C9.49229 26.0477 8.59076 26.4414 8.54592 26.4414C8.10242 26.4414 8.83972 26.8819 11.6848 28.3171L15.0214 30L16.4253 29.3069C17.1974 28.9257 18.7548 28.1624 19.8862 27.6106C21.0175 27.0587 21.9292 26.5928 21.9121 26.5753C21.895 26.5578 20.947 26.071 19.8055 25.4935L17.73 24.4438L16.9362 24.7852Z'
                                 fill='currentColor'
                              ></path>
                           </g>
                        </svg>
                     </a>
                     <a
                        class='footer__btn'
                        target='_blank'
                        href='https://t.me/BruuuhSol'
                     >
                        <svg
                           width='30'
                           height='30'
                           viewBox='0 0 30 30'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              fill-rule='evenodd'
                              clip-rule='evenodd'
                              d='M26.0414 4.70151C25.6333 3.70363 25.6333 3.70364 25.6332 3.70365L25.633 3.70373L25.5731 3.72823C25.5339 3.74432 25.476 3.76798 25.4019 3.79833C25.2537 3.85902 25.0403 3.94647 24.7793 4.05352C24.2573 4.26761 23.5449 4.56016 22.7836 4.87395C21.2704 5.49762 19.5497 6.2109 18.7535 6.55579C16.7144 7.40277 12.762 9.02622 9.31532 10.4396C7.59034 11.147 5.99279 11.8014 4.82648 12.279C4.24333 12.5178 3.768 12.7124 3.43846 12.8472C3.2737 12.9147 3.14538 12.9672 3.05826 13.0028L2.92612 13.0569C2.17266 13.3516 1.59295 13.6863 1.20132 14.0923C0.772329 14.537 0.55564 15.0904 0.64479 15.6748C0.723169 16.1886 1.01359 16.5472 1.19441 16.7328C1.29365 16.8346 1.38801 16.913 1.45878 16.9671C1.49476 16.9946 1.52627 17.017 1.55139 17.0342C1.564 17.0428 1.57512 17.0502 1.58455 17.0564C1.58926 17.0595 1.59357 17.0622 1.59743 17.0647C1.59936 17.0659 1.60118 17.0671 1.60289 17.0682L1.60537 17.0697L1.60655 17.0704C1.60712 17.0708 1.60768 17.0712 2.17792 16.1562L1.60768 17.0712L1.71245 17.1365L1.82926 17.1764L2.17792 16.1562C1.82926 17.1764 1.82929 17.1764 1.82932 17.1764L1.82943 17.1764L1.82983 17.1766L1.85757 17.186C1.87587 17.1923 1.90281 17.2014 1.93774 17.2133C2.0076 17.237 2.1094 17.2714 2.23783 17.3146C2.49463 17.401 2.85815 17.5225 3.28577 17.6632C4.13959 17.9441 5.25488 18.3033 6.28821 18.6124C7.46997 18.9659 8.42192 18.9583 9.11342 18.836C9.45625 18.7754 9.72811 18.6878 9.92607 18.6079C10.0249 18.568 10.1053 18.5301 10.1667 18.4985C10.1975 18.4827 10.2235 18.4684 10.2448 18.4563C10.2555 18.4502 10.265 18.4447 10.2733 18.4397C10.2774 18.4373 10.2813 18.4349 10.2848 18.4328C10.2866 18.4317 10.2883 18.4306 10.2899 18.4296L10.2923 18.4282L10.2935 18.4274C10.294 18.4271 10.2946 18.4267 9.72442 17.5117L10.2946 18.4267L10.305 18.4203L10.3152 18.4136L9.72442 17.5117C10.3152 18.4136 10.3153 18.4135 10.3153 18.4135L10.3155 18.4134L10.3705 18.3773C10.4068 18.3535 10.4605 18.3182 10.5306 18.2722C10.6706 18.1801 10.8759 18.045 11.1373 17.8725C11.66 17.5276 12.4071 17.0332 13.3051 16.4349C14.342 15.7441 15.5808 14.9144 16.9084 14.0161C15.6921 15.1701 14.4014 16.3748 13.2209 17.4536C12.4887 18.0965 12.1214 18.8801 12.2547 19.715C12.373 20.4563 12.8513 20.9725 13.1715 21.246L13.174 21.2482L13.1766 21.2503C14.115 22.0419 15.8159 23.2105 17.268 24.1785C18.0036 24.6688 18.6915 25.1182 19.2106 25.4565C19.2783 25.5006 19.343 25.5427 19.4045 25.5828C19.5795 25.6968 19.7285 25.7938 19.8469 25.8714C20.0027 25.9735 20.0735 26.0212 20.0891 26.0317C20.3497 26.2342 20.9705 26.6364 21.6814 26.9635C22.0539 27.1349 22.4825 27.3005 22.9227 27.4028C23.3515 27.5025 23.8701 27.561 24.384 27.4404C25.4504 27.1903 25.9739 26.3546 26.2106 25.7925C26.3347 25.498 26.4058 25.223 26.4463 25.0248C26.467 24.9241 26.4805 24.8391 26.4893 24.776C26.4933 24.7467 26.4964 24.7218 26.4986 24.7021L26.5337 24.4814C26.5595 24.3195 26.5972 24.0826 26.645 23.7824C26.7406 23.182 26.8765 22.3285 27.038 21.3162C27.3609 19.2915 27.7858 16.6316 28.1936 14.0903L28.1943 14.0856L28.195 14.0808C28.3403 13.1218 28.4871 12.1722 28.6256 11.2774C28.9958 8.88395 29.3053 6.88292 29.3597 6.14313C29.4239 5.4002 29.2925 4.70244 28.8403 4.17298C28.3895 3.64514 27.7867 3.48044 27.3328 3.44108C26.8801 3.40182 26.4558 3.47381 26.175 3.5395C26.0282 3.57386 25.9046 3.61037 25.8155 3.6391C25.7706 3.65356 25.7337 3.66628 25.7062 3.67614C25.6923 3.68107 25.6808 3.68531 25.6717 3.6887C25.6671 3.6904 25.6632 3.69189 25.6599 3.69316L25.6553 3.69489L25.6526 3.69596C25.6522 3.69612 25.6518 3.69627 26.0414 4.70151ZM26.4327 5.70631L26.3898 5.72383C26.3507 5.73985 26.293 5.76345 26.2191 5.79374C26.0712 5.8543 25.8581 5.9416 25.5975 6.04849C25.0763 6.26227 24.3651 6.55433 23.6052 6.86751C22.0809 7.49578 20.3744 8.20332 19.6035 8.53748L19.5959 8.54076L19.5883 8.54393C17.5459 9.39227 13.5832 11.02 10.1334 12.4346C8.40801 13.1422 6.81012 13.7967 5.64359 14.2744C5.06032 14.5133 4.58487 14.7079 4.25524 14.8428C4.09043 14.9103 3.96207 14.9628 3.8749 14.9985L3.74229 15.0527L3.74189 15.0529C3.74185 15.0529 3.74182 15.0529 3.70776 14.9697L3.72468 15.0599C3.46297 15.1617 3.26575 15.2551 3.11855 15.3358C3.3488 15.4129 3.63552 15.5083 3.95958 15.6149C4.80546 15.8932 5.89978 16.2456 6.90608 16.5466C7.76394 16.8032 8.37563 16.7768 8.73786 16.7127C8.92189 16.6802 9.04942 16.6365 9.11914 16.6083C9.14214 16.5991 9.15893 16.5914 9.16942 16.5864L9.18755 16.5745C9.22335 16.551 9.27659 16.5161 9.34612 16.4704C9.48519 16.379 9.68942 16.2445 9.94965 16.0728C10.4701 15.7294 11.2146 15.2367 12.1097 14.6404C13.9002 13.4475 16.292 11.8409 18.6996 10.1845L18.7027 10.1824L18.7057 10.1803C19.5748 9.59115 20.2573 9.21126 20.7857 9.0299C21.0399 8.94266 21.3689 8.86142 21.7126 8.90439C22.1273 8.95622 22.5673 9.20035 22.7717 9.69538C22.9322 10.0842 22.8686 10.4539 22.8191 10.6497C22.7623 10.8746 22.6679 11.0846 22.5734 11.2601C22.384 11.6117 22.116 11.9673 21.8395 12.2429L21.8395 12.243C20.0584 14.0186 17.1232 16.8086 14.667 19.0531L14.6578 19.0615L14.6484 19.0697C14.465 19.2297 14.4068 19.3351 14.3909 19.3715C14.3889 19.3761 14.3875 19.3797 14.3865 19.3824C14.3904 19.3927 14.3995 19.4127 14.4198 19.4426C14.4543 19.4932 14.5061 19.5499 14.5698 19.6046C15.3998 20.3042 16.9943 21.4047 18.4639 22.3843C19.19 22.8682 19.8703 23.3127 20.3879 23.65C20.4579 23.6956 20.5263 23.7402 20.5924 23.7832C20.9839 24.0381 21.2942 24.2402 21.3842 24.3075L21.3975 24.3175L21.4106 24.3279C21.505 24.4032 21.9898 24.7319 22.5828 25.0047C22.8732 25.1384 23.1584 25.2439 23.4109 25.3025C23.6748 25.3639 23.8275 25.3562 23.8916 25.3412C23.981 25.3202 24.1033 25.2408 24.2234 24.9556C24.2778 24.8265 24.3129 24.6948 24.3339 24.5922C24.3441 24.5425 24.3502 24.5036 24.3534 24.4804C24.3548 24.4704 24.3556 24.4635 24.356 24.4603C24.356 24.4598 24.3561 24.4594 24.3561 24.4591C24.3561 24.4591 24.3561 24.4591 24.3561 24.4591L24.3587 24.4291L24.3647 24.3914L25.4294 24.5607C24.3647 24.3914 24.3647 24.3913 24.3647 24.3913L24.3647 24.3911L24.4043 24.1425C24.43 23.9806 24.4677 23.7436 24.5156 23.4433C24.6112 22.8428 24.7472 21.9891 24.9087 20.9766C25.2314 18.9528 25.6561 16.2941 26.0638 13.7532C26.2212 12.7142 26.3766 11.7088 26.52 10.7816C26.88 8.45343 27.1639 6.61793 27.2096 5.97989L27.2103 5.97095L27.2111 5.96202C27.2286 5.76367 27.214 5.65168 27.2006 5.59618C27.1867 5.59369 27.169 5.59121 27.1465 5.58926C27.0129 5.57768 26.8381 5.59885 26.6663 5.63904C26.5869 5.65762 26.5208 5.67723 26.4769 5.69138C26.4562 5.69807 26.4411 5.70331 26.4327 5.70631ZM27.2421 5.60745C27.242 5.60753 27.2404 5.60694 27.2377 5.60545C27.2408 5.60662 27.2422 5.60737 27.2421 5.60745ZM27.188 5.55643C27.1857 5.55289 27.1848 5.55091 27.185 5.5508C27.1851 5.5507 27.1862 5.55247 27.188 5.55643ZM26.0414 4.70151L25.6518 3.69627L25.6425 3.69986L25.6333 3.70363L26.0414 4.70151ZM21.5691 11.0453C21.5691 11.0454 21.5681 11.0456 21.5661 11.0459C21.5682 11.0455 21.5691 11.0453 21.5691 11.0453Z'
                              fill='currentColor'
                           ></path>
                        </svg>
                     </a>
                     <a
                        class='footer__btn'
                        href='https://x.com/BruuuhSol'
                        target='_blank'
                     >
                        <svg
                           width='30'
                           height='30'
                           viewBox='0 0 30 30'
                           fill='none'
                           xmlns='http://www.w3.org/2000/svg'
                        >
                           <path
                              d='M21.8879 3.76904H25.5679L17.4879 13.7021L26.9279 27.1766H19.5199L13.7199 18.9883L7.07992 27.1766H3.39992L11.9599 16.5525L2.91992 3.76904H10.5119L15.7519 11.2491L21.8879 3.76904ZM20.5999 24.8445H22.6399L9.43992 6.01479H7.24792L20.5999 24.8445Z'
                              fill='currentColor'
                           ></path>
                        </svg>
                     </a>
                  </div>
               </div>
            </footer>
         </div>
      </>
   );
}

export default App;
