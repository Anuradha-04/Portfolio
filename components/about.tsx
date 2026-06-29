/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import Image from 'next/image';

const About = () => {
    return (
        <div id="about">
            <div className='flex item center justify-center animate-slide-up'>
                <div className='eurostile'>
                    <h5 className='sm:text-[18px] text-[15px]'>Get To Know</h5>
                    <h1 className='sm:text-[30px] text-[24px] -ml-4 sm:-ml-5 font-medium mt-3'> About Me</h1>
                </div>
            </div>

            <div className="flex justify-between gap-8 sm:mt-12 mt-8 eurostile">
                <div className="sm:w-[100%] animate-slide-up">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <article className="about__card bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc]">
                            <FaAward className='text-[#4738bc] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">EXPERIENCE</h5>
                            <div className="text-gray-400 mt-2">2 + Years Working</div>
                        </article>

                        <article className="about__card bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc]">
                            <FiUsers className='text-[#4738bc] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">CLIENTS</h5>
                            <div className="text-gray-400 mt-2">5 + World Wide</div>
                        </article>

                        <article className="about__card bg-[#0f0b2f] rounded-lg py-14 text-center transition-all hover:bg-transparent border border-transparent hover:border-[#4738bc]">
                            <VscFolderLibrary className='text-[#4738bc] text-4xl mx-auto mb-3' />
                            <h5 className="text-white">PROJECTS</h5>
                            <div className="text-gray-400 mt-2">20 + Completed</div>
                        </article>
                    </div>
                    <p className="text-gray-400 sm:mt-8 mt-6">
                        I'm a Full Stack Software Engineer with 2+ years of experience building scalable web applications and AI-powered solutions. I specialize in React.js, Next.js, TypeScript, FastAPI, Node.js, and Python, with hands-on experience integrating OpenAI APIs, LangChain, and RAG-based applications. Passionate about writing clean, maintainable code and delivering high-performance, user-centric products.
                    </p>
                    <div className='flex item center justify-center'>
                        <a href="#contact" className='sm:mt-8 mt-6 sm:text-[18px] text-[15px]'>Let's Talk</a>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default About;
