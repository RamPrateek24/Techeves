'use client';
import Image from 'next/image';

const ExploreBtn = () => {
  return (
    <button type="button" id="explore-btn" className="mt-7 mx-auto bg-transparent border-2" onClick={() => console.log('CLICK')}>
        <a href="#events" className="flex items-center gap-2 text-[#94eaff] text-xl font-bold">
            Explore Events
            <Image src="/icons/arrow-down.svg" alt="down arrow" width={24} height={24} className="invert-[70%] brightness-150"/>
        </a>
    </button>
  );
};

export default ExploreBtn;