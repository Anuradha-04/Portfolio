import React from 'react';
import emailjs from '@emailjs/browser';

import { MdOutlineMailOutline } from 'react-icons/md';
import { SiLinkedin } from 'react-icons/si';
import { BsWhatsapp } from 'react-icons/bs';
import { MdPermPhoneMsg } from "react-icons/md";
import ContactForm from './form';

const Contact = () => {

    return (
        <div id="contact">

            <div className='flex item center justify-center animate-slide-up'>
                <div className='eurostile'>
                    <h5 className='sm:text-[18px] text-[15px]'>Get In Touch</h5>
                    <h1 className='sm:text-[30px] text-[24px] sm:-ml-12 -ml-8 font-medium mt-3'>Contact Me</h1>
                </div>
            </div>

            <div className="container sm:grid grid-cols-2 gap-8 sm:mt-12 mt-8 eurostile">

                <div className="space-y-4 sm:space-y-0 gap-0 sm:gap-6 grid grid-cols-1 sm:grid-cols-2">

                    <div className="bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc] animate-slide-up">
                        <div className='flex justify-center'>
                            <MdOutlineMailOutline className="text-[#4738bc] text-[28px]" />
                            <h4 className='ml-3 mt-[2px]'>Email</h4>
                        </div>
                        <h5 className='mt-2'>Connect with Email</h5>

                        <div className="mt-6 ml-3">
                            <a href="mailto:anuradhasingh93661@gmail.com" target="_blank" className='text-[12px] sm:text-[14px] sm:px-5 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #3f4ed8, #6539bc)' }}>Send mail</a>
                        </div>
                    </div>

                    <div className="bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc] animate-slide-up">
                        <div className='flex justify-center'>
                            <MdPermPhoneMsg className="text-[#4738bc] text-[23px]" />
                            <h4 className='ml-3'>Call</h4>
                        </div>
                        <h5 className='mt-2'>Connect with call</h5>

                        <div className="mt-6 ml-3">
                            <a href="tel:+918840110726" className='text-[12px] sm:text-[14px] sm:px-5 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #3f4ed8, #6539bc)' }}><b> Direct call</b></a>
                        </div>
                    </div>

                    <div className="bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc] animate-slide-up">
                        <div className='flex justify-center'>
                            <SiLinkedin className="text-[#4738bc] text-[23px]" />
                            <h4 className='ml-3'>Whatsapp</h4>
                        </div>
                        <h5 className='mt-2'>Connect with Whatsapp</h5>

                        <div className="mt-6 ml-3">
                            <a href="https://wa.me/+918840110726" target="_blank" className='text-[12px] sm:text-[14px] sm:px-5 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #3f4ed8, #6539bc)' }}>Send a message</a>
                        </div>
                    </div>

                    <div className="bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc] animate-slide-up">
                        <div className='flex justify-center'>
                            <BsWhatsapp className="text-[#4738bc] text-[25px]" />
                            <h4 className='ml-3 mt-[1px]'>Linkedin</h4>
                        </div>
                        <h5 className='mt-2'>Connect with Linkedin</h5>

                        <div className="mt-6 ml-3">
                            <a href="https://www.linkedin.com/in/anuradha-singh-230b8b253/" target="_blank" className='text-[12px] sm:text-[14px] sm:px-5 mr-4 px-3 py-2 rounded-xl shadow-lg text-white transition duration-300 ease-in-out transform hover:scale-105' style={{ background: 'linear-gradient(to right, #3f4ed8, #6539bc)' }}>Send a message</a>
                        </div>
                    </div>

                </div>

                <ContactForm />
            </div>
        </div>
    );
};

export default Contact;
