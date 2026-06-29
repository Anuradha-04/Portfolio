/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import Image from 'next/image';
import "../../app/globals.css"

const Header = () => {

  return (
    <div className='relative'>
      <div className="absolute inset-0">
        <Image
          height={2000}
          width={2000}
          alt=''
          src={"/images/purplebg.png"}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className='relative h-screen sm:pt-16 pt-10 sm:mx-16 mx-6 text-[#FFF]'>
        <div className='flex item center justify-center'>
          <div className='eurostile animate-slide-up'>
            <h5 className='sm:text-[18px] text-[15px] ml-16'>Hello I'm</h5>
            <h1 className='sm:text-[28px] text-[22px] mt-3 sm:-ml-12 -ml-8 font-medium'> ANURADHA SINGH</h1>
          </div>
        </div>
        <p className="max-w-3xl mx-auto mt-6 text-gray-300 leading-8 text-sm sm:text-lg">
          Full Stack Software Engineer with 2+ years of experience designing and building
          scalable web applications using React.js, Next.js, TypeScript, FastAPI,
          Node.js, Python, PostgreSQL, and MongoDB. Experienced in developing
          AI-powered applications using OpenAI APIs, LangChain, LangGraph, and RAG.
        </p>

        <div className='sm:mt-16 mt-8'>
          <CTA />
          <HeaderSocials />
        </div>

        <div>
          <a href='#contact' className='absolute right-0 bottom-[65px] transform rotate-90 font-light text-sm -mr-8'>Scroll Down</a>
        </div>

        <div className="flex justify-center sm:mt-16 mt-8">
          <div className="rounded-t-full rounded-b-sm overflow-hidden animate-slide-up">
            <Image
              height={2000}
              width={2000}
              alt=""
              src={"/images/me-about.png"}
              className="h-[75%] sm:w-[25vw] w-[68vw] object-cover"
            />
          </div>
        </div>
      </div>
    </div>

  );
}

export default Header;
