'use client';

import React from 'react';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';

const experiences = [
    {
        company: "SAT n Paper",
        role: "Software Development Engineer (Full Stack + AI)",
        duration: "June 2025 – Present",
        techStack: [
            "React.js",
            "Next.js",
            "TypeScript",
            "FastAPI",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "AWS",
            "OpenAI",
            "LangChain",
            "LangGraph",
            "RAG",
        ],
        points: [
            "Developed scalable full-stack SaaS applications using React.js, Next.js, FastAPI, Node.js, PostgreSQL, and MongoDB.",
            "Built AI-powered applications using OpenAI APIs, LangChain, LangGraph, ChromaDB, and Retrieval-Augmented Generation (RAG).",
            "Designed secure REST APIs, optimized backend performance, and integrated AWS services including S3, Lambda, and Step Functions.",
            "Collaborated with cross-functional teams to deliver high-performance, production-ready enterprise applications.",
        ],
        projects: [
            {
                name: "Zupians Support",
                link: "https://support.zupians.com",
                description:
                    "Enterprise Human Resource Management System for employee management, attendance, payroll, leave management, and performance tracking.",
                technologies: [
                    "React.js",
                    "Next.js",
                    "FastAPI",
                    "PostgreSQL",
                    "AWS",
                ],
            },
            {
                name: "Product Academy",
                link: "https://dev-academy.zupians.com/",
                description:
                    "AI-powered platform for uploading product videos, generating intelligent summaries, and extracting key insights to enhance learning and knowledge sharing.",
                technologies: [
                    "React.js",
                    "FastAPI",
                    "OpenAI",
                    "LangChain",
                    "LangGraph",
                    "RAG",
                    "ChromaDB",
                ],
            },
        ],
    },

    {
        company: "The Entrepreneurship Network",
        role: "MERN Stack Developer",
        duration: "Apr 2024 – Dec 2024",
        techStack: [
            "React.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "TypeScript",
            "Tailwind CSS",
            "OpenAI API",
        ],
        points: [
            "Developed and maintained full-stack web applications using the MERN stack.",
            "Built scalable REST APIs and integrated frontend applications with backend services.",
            "Designed responsive user interfaces and optimized application performance.",
            "Contributed to AI-powered features by integrating OpenAI APIs into web applications.",
        ],
        projects: [
            {
                name: "TEN AI Consulting Labs",
                link: "https://ten-ai-consulting-labs.vercel.app/",
                description:
                    "Developed responsive interfaces and backend integrations for an AI consulting platform, enhancing user experience and application performance.",
                technologies: [
                    "React.js",
                    "TypeScript",
                    "Node.js",
                ],
            },
            {
                name: "TEN Online Travel",
                link: "https://ten-online-travel.vercel.app/",
                description:
                    "Built a modern travel booking platform featuring responsive UI, dynamic API integrations, and seamless booking workflows.",
                technologies: [
                    "React.js",
                    "Express.js",
                    "MongoDB",
                ],
            },
            {
                name: "InternConnect",
                link: "https://internconnect.vercel.app/",
                description:
                    "Developed a recruitment platform connecting students with internships and recruiters through candidate management, job listings, and recruiter dashboards.",
                technologies: [
                    "React.js",
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "TypeScript",
                ],
            },
        ],
    },
];

const Testimonials = () => {
    return (
        <div className="space-y-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
                <div
                    key={index}
                    className="bg-[#0f0b2f]/90 backdrop-blur-md border border-[#4738bc]/30 rounded-3xl p-8 lg:p-10 hover:border-[#4738bc] transition-all"
                >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3">

                        <div>
                            <div className="flex items-center gap-3">
                                <FaBriefcase className="text-[#4738bc] text-xl" />

                                <h2 className="text-2xl font-semibold">
                                    {exp.company}
                                </h2>
                            </div>

                            <p className="text-[#b9b5d6] mt-2">
                                {exp.role}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-gray-400">
                            <FaCalendarAlt />
                            {exp.duration}
                        </div>

                    </div>

                    {/* Tech Stack */}

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">
                            Tech Stack
                        </h4>

                        <div className="flex flex-wrap gap-3">
                            {exp.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 rounded-full bg-[#4738bc]/20 border border-[#4738bc]/40 text-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Responsibilities */}

                    <div className="mt-8">
                        <h4 className="text-lg font-semibold mb-4">
                            Responsibilities
                        </h4>

                        <ul className="space-y-3">
                            {exp.points.map((point, i) => (
                                <li
                                    key={i}
                                    className="flex gap-3 text-gray-300"
                                >
                                    <span className="text-[#4738bc]">✔</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Projects */}

                    <div className="mt-10">
                        <h4 className="text-lg font-semibold mb-6">
                            Featured Projects
                        </h4>

                        <div className="grid lg:grid-cols-3 gap-6">

                            {exp.projects.map((project) => (
                                <div
                                    key={project.name}
                                    className="rounded-2xl border border-[#4738bc]/30 bg-[#17103b] p-6 hover:border-[#4738bc] transition-all"
                                >

                                    <h5 className="text-lg font-semibold">
                                        {project.name}
                                    </h5>

                                    <p className="text-gray-400 mt-3 text-sm leading-7">
                                        {project.description}
                                    </p>

                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block mt-5 text-[#7d6cff] hover:text-white transition"
                                        >
                                            View Project →
                                        </a>
                                    )}

                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;