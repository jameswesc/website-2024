import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    InstagramIcon,
    LinkedInIcon,
    YoutubeIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpeg'

function SocialLink({
    className,
    href,
    children,
    icon: Icon,
}: {
    className?: string
    href: string
    icon: React.ComponentType<{ className?: string }>
    children: React.ReactNode
}) {
    return (
        <li className={clsx(className, 'flex')}>
            <Link
                href={href}
                className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
            >
                <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
                <span className="ml-4">{children}</span>
            </Link>
        </li>
    )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                fillRule="evenodd"
                d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
            />
        </svg>
    )
}

export const metadata: Metadata = {
    title: 'About',
    description: 'I’m James Gregory, software engineer for social good',
}

export default function About() {
    return (
        <Container className="mt-16 sm:mt-32">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                        <Image
                            src={portraitImage}
                            alt="Photo of James Gregory in a white and floral jumpsuit."
                            sizes="(min-width: 1024px) 32rem, 20rem"
                            className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                        />
                    </div>
                </div>
                <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                        James Gregory, <br />
                        environmental spatial Scientist
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
                        <p>
                            I'm James Gregory, an environmental spatial data
                            scientist focusing on how I can best apply my
                            experience in software enginering and design to
                            ennvironmental geospatial science. Originally from
                            Warrane/Sydney, I've recently moved to
                            Lutruwita/Tasmania.
                        </p>
                        <p>
                            From 2008 to 2023 I led the Design and Engineering
                            team at{' '}
                            <a href="https://smashdelta.com/">Smash Delta</a>,
                            an Australian based data strategy consulting firm.
                            During this time I specialised in creating web
                            applications for data visualisation, 3D
                            visualisation and maps. Recently, I've been focusing
                            on geospatial by studying a Masters of Environmental
                            Geospatial Science at the University of Tasmania.
                        </p>
                        <p>
                            When I'm not a tapping on keyboard I enjoy playing
                            squash, good food with friends, live music, and
                            disconnecting in nature. Sometimes, I like to tap at
                            the keyboard for fun and make{' '}
                            <Link className="underline" href="/creative">
                                generative art
                            </Link>
                            .
                        </p>
                    </div>
                </div>
                <div className="lg:pl-20">
                    <ul role="list">
                        <SocialLink
                            href="https://www.linkedin.com/in/jameswesc/"
                            icon={LinkedInIcon}
                            className="mt-4"
                        >
                            LinkedIn
                        </SocialLink>

                        <SocialLink
                            href="https://github.com/jameswesc"
                            icon={GitHubIcon}
                            className="mt-4"
                        >
                            GitHub
                        </SocialLink>
                        <SocialLink
                            href="https://www.instagram.com/james.wesc/"
                            icon={InstagramIcon}
                            className="mt-4"
                        >
                            Instagram
                        </SocialLink>
                        <SocialLink
                            href="https://www.youtube.com/@jameswesc"
                            icon={YoutubeIcon}
                            className="mt-4"
                        >
                            YouTube
                        </SocialLink>
                        <SocialLink
                            href="mailto:james@jameswesc.com"
                            icon={MailIcon}
                            className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                        >
                            james@jameswesc.com
                        </SocialLink>
                    </ul>
                </div>
            </div>
        </Container>
    )
}
