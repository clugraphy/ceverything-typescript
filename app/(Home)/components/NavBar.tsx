import Link from 'next/link'
import React from 'react'
import { SiGithub, SiLinkedin } from "react-icons/si"

export default function NavBar() {
    const socials = [
        {
            link: "https://github.com/clugraphy",
            label: "GitHub",
            Icon: SiGithub,
        },
        {
            link: "https://linked.in/clugraphy",
            label: "LinkedIn",
            Icon: SiLinkedin,
        },
        {
            link: "https://github.com/clugraphy",
            label: "GitHub",
            Icon: SiGithub,
        },
    ]

    return (
        <nav className='py-10 px-2 justify-between justify-items-center items-center flex'>
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

