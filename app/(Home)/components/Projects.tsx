import React from 'react'
import { SiNextdotjs, SiReactquery, SiSupabase, SiTailwindcss } from 'react-icons/si'
import Title from './Title'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover'

export default function Projects() {

    const projects = [
        {
            title: 'Pomodoro Timer',
            tech: [SiNextdotjs, SiReactquery, SiTailwindcss, SiSupabase],
            link: 'http://localhost:3000/',
            cover: "/images/water5.png",
            background: "bg-indigo-500"
        },
        {
            title: 'Pixel Timer',
            tech: [SiNextdotjs, SiReactquery, SiTailwindcss, SiSupabase],
            link: 'http://localhost:3000/',
            cover: "/images/water2.png",
            background: "bg-indigo-500"
        },
        {
            title: 'Greener future',
            tech: [SiNextdotjs, SiReactquery, SiTailwindcss, SiSupabase],
            link: 'http://localhost:3000/',
            cover: "/images/water1.png",
            background: "bg-green-500"
        },
        {
            title: 'Water timer',
            tech: [SiNextdotjs, SiReactquery, SiTailwindcss, SiSupabase],
            link: 'http://localhost:3000/',
            cover: "/images/water4.png",
            background: "bg-green-500"
        }
    ]

    return (
        <div className='py-10 p-5 sm:p-0'>
            <Title text="Projects" className='flex flex-col justify-center -rotate-6 py-10' />
            <div className='grid grid-cols-1 sm:grid-cols-2 pt-20 gap-5'>
                {projects.map((project, index) => {
                    return <Link href={project.link} key={index}>
                        <div className={cn("p-5 rounded-md", project.background)}>
                            <DirectionAwareHover className="w-full space-y-5 cursor-pointer" imageUrl={project.cover}>
                                <div className='space-y-5'>

                                    <h1 className='text-2xl text-bold'>{project.title}</h1>
                                    <div className='flex items-center gap-5'>
                                        {project.tech.map((Icon, index) => {
                                            return <Icon className="w-8 h-5" key={index} />;
                                        })}
                                    </div>
                                </div>
                            </DirectionAwareHover>
                        </div>
                    </Link>
                })
                }
            </div>
        </div >

    )
}
