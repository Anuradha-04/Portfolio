import React from 'react';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';

const HeaderSocials = () => {
    return (
        <div className='flex flex-col items-center gap-2 absolute left-0 bottom-12'>
            <a href='www.linkedin.com' target="_blank" className='text-primary'><BsLinkedin /></a>
            <a href='https://github.com/Anuradha-04' target="_blank" className='text-primary'><BsGithub /></a>
            <a href='mailto:anuradhasingh93661@gmail.com' className='text-primary'><TfiEmail /></a>
        </div>
    );
}

export default HeaderSocials;
