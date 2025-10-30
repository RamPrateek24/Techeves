'use client';
import Image from 'next/image';

type ExploreBtnProps = {
  onScroll: () => void;
};

const ExploreBtn = ({ onScroll }: ExploreBtnProps) => {
  return (
    <button
      type="button"
      id="explore-btn"
      onClick={onScroll} 
      className="mt-7 mx-auto flex items-center gap-2 text-[#94eaff] text-xl font-bold bg-transparent border-2 border-[#94eaff] backdrop-blur px-5 py-2 hover:bg-[#94eaff] hover:text-black transition-all duration-300"
    >
      <span>Explore Events</span>
      <Image src="/icons/arrow-down.svg" alt="down arrow" width={24} height={24} className="invert-[70%] brightness-150"/>
    </button>
  );
};

export default ExploreBtn;
