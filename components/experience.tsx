import React from 'react';
import { BsPatchCheckFill } from 'react-icons/bs';
import "../app/globals.css";

const Experience = () => {
    return (
        <section id="experience" className="py-16">
            <div className="flex items-center justify-center">
                <div className="eurostile animate-slide-up text-center">
                    <h5 className="sm:text-[18px] text-[15px] text-white">
                        What Skills I Have
                    </h5>
                    <h1 className="sm:text-[30px] text-[24px] font-medium mt-3 text-white">
                        MY EXPERIENCE
                    </h1>
                </div>
            </div>

            <div className="container grid grid-cols-1 md:grid-cols-2 gap-8 eurostile sm:mt-12 mt-8 animate-slide-up">

                {/* Frontend */}
                <div className="bg-[#0f0b2f] rounded-xl p-6 hover:border-[#4738bc] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">
                        FRONTEND
                    </h3>

                    <div className="grid grid-cols-2 gap-6 text-[13px] sm:text-[16px]">
                        {[
                            "React.js",
                            "Next.js",
                            "TypeScript",
                            "JavaScript",
                            "Redux",
                            "Tailwind CSS",
                            "Material UI",
                            "HTML & CSS",
                        ].map((skill) => (
                            <div key={skill} className="flex items-center">
                                <BsPatchCheckFill className="text-[#4738bc]" />
                                <span className="ml-2">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend */}
                <div className="bg-[#0f0b2f] rounded-xl p-6 hover:border-[#4738bc] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">
                        BACKEND
                    </h3>

                    <div className="grid grid-cols-2 gap-6 text-[13px] sm:text-[16px]">
                        {[
                            "FastAPI",
                            "Node.js",
                            "Express.js",
                            "Python",
                            "REST APIs",
                            "WebSockets",
                            "JWT Auth",
                            "SQL",
                        ].map((skill) => (
                            <div key={skill} className="flex items-center">
                                <BsPatchCheckFill className="text-[#4738bc]" />
                                <span className="ml-2">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI & Cloud */}
                <div className="bg-[#0f0b2f] rounded-xl p-6 hover:border-[#4738bc] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">
                        AI & CLOUD
                    </h3>

                    <div className="grid grid-cols-2 gap-6 text-[13px] sm:text-[16px]">
                        {[
                            "OpenAI API",
                            "LangChain",
                            "LangGraph",
                            "RAG",
                            "ChromaDB",
                            "Prompt Engineering",
                            "AWS",
                            "Lambda & S3",
                        ].map((skill) => (
                            <div key={skill} className="flex items-center">
                                <BsPatchCheckFill className="text-[#4738bc]" />
                                <span className="ml-2">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Database & Tools */}
                <div className="bg-[#0f0b2f] rounded-xl p-6 hover:border-[#4738bc] transition-all hover:bg-transparent border border-transparent">
                    <h3 className="text-center sm:text-2xl text-xl mb-6">
                        DATABASE & TOOLS
                    </h3>

                    <div className="grid grid-cols-2 gap-6 text-[13px] sm:text-[16px]">
                        {[
                            "PostgreSQL",
                            "MongoDB",
                            "Git",
                            "GitHub",
                            "npm",
                            "Yarn",
                            "Agile",
                            "Jira",
                        ].map((skill) => (
                            <div key={skill} className="flex items-center">
                                <BsPatchCheckFill className="text-[#4738bc]" />
                                <span className="ml-2">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;