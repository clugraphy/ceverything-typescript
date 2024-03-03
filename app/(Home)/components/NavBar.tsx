import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin, SiTwitter } from "react-icons/si"

export default function NavBar({ classname }: { classname?: string }) {
    const socials = [
        {
            link: "https://github.com/clugraphy",
            label: "GitHub",
            Icon: SiGithub,
        },
        {
            link: "www.linkedin.com/in/alexandru-catalin-stroe",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            link: "https://twitter.com/clugraphy",
            label: "Twitter",
            Icon: SiTwitter,
        },
    ]

    return (
        <nav className={cn('py-10 px-2 justify-between justify-items-center items-center flex animate-move-down', classname)}>
            <h1 className='text-2xl font-bold underline under-offset-8 decoration-green-500 -rotate-2'>C Everything</h1>
            <div className='flex items-center gap-5'>
                {socials.map((social, index) => {

                    const Icon = social.Icon
                    return <Link href={social.link} key={index} aria-label={social.label}>
                        <Icon className='w-5 h-5 hover:scale-125 transition-all' />
                    </Link>
                }
                )}

            </div>
        </nav>
    )


}

