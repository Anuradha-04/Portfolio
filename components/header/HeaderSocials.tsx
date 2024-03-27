import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const HeaderSocials = () => {
    return (
        <div className='flex flex-col items-center gap-2 absolute left-0 bottom-12 '>
            <a href='https://www.linkedin.com/in/anuradha-singh-230b8b253/' target="_blank" className='text-[#FFF]'><BsLinkedin /></a>
            <a href='https://github.com/Anuradha-04' target="_blank" className='text-[#FFF]'><BsGithub /></a>
            <a href='mailto:anuradhasingh93661@gmail.com' className='text-[#FFF]'><TfiEmail /></a>
        </div>
    );
}

export default HeaderSocials;
