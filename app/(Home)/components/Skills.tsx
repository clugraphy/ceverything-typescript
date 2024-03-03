"use client"
import React from 'react'
import Title from './Title'
import { HoverEffect } from '@/components/ui/card-hover-effect'
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiPython, SiNodedotjs, SiFlutter, SiJavascript, SiSupabase, SiFirebase } from 'react-icons/si'
import { text } from 'stream/consumers'

export default function Skills() {

    const skills = [
        {
            text: 'React',
            Icon: SiReact,
        },
        {
            text: 'Next.js',
            Icon: SiNextdotjs,
        },
        {
            text: 'Tailwind',
            Icon: SiTailwindcss
        },
        {
            text: 'Node.js',
            Icon: SiNodedotjs
        },
        {
            text: 'Javascript',
            Icon: SiJavascript
        },
        {
            text: 'TypeScript',
            Icon: SiTypescript
        },
        {
            text: 'Python',
            Icon: SiPython
        },
        {
            text: 'Flutter',
            Icon: SiFlutter
        },
        {
            text: 'Supabase',
            Icon: SiSupabase
        },
        {
            text: 'Firebase',
            Icon: SiFirebase
        }



    ];

    return (
        <>
            <div className='max-w-5xl mx-auto px-8'>

                <Title text="Skills" className='flex flex-col justify-center -rotate-6' />
                <HoverEffect items={skills} />
            </div>
        </>
    );
}
