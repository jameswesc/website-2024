import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'
import Image, { StaticImageData } from 'next/image'

import thumbnail1 from '@/images/video-thumbnails/cs17.png'
import thumbnail2 from '@/images/video-thumbnails/cs16.png'
import thumbnail3 from '@/images/video-thumbnails/cs15.png'
import { Card } from '@/components/Card'

export const metadata: Metadata = {
    title: 'Creative Coding',
    description: '🚧 A collection of creative coding projects',
}

type VideoData = {
    title: string
    thumbnail: StaticImageData
    url: string
}

const videos: VideoData[] = [
    {
        title: 'Creative Coding Time-lapse - Flow fields w/ React Three Fiber',
        thumbnail: thumbnail1,
        url: 'https://www.youtube.com/watch?v=CSriW4C3N3M',
    },
    {
        title: 'Creative Coding Time-lapse [CS16] - React JS & Three JS',
        thumbnail: thumbnail2,
        url: 'https://www.youtube.com/watch?v=WHndQrt2qbw&t=1s',
    },
    {
        title: 'Creative Coding Time-lapse [CS15] - React JS & Three JS',
        thumbnail: thumbnail3,
        url: 'https://www.youtube.com/watch?v=GVJP7jzwH6g',
    },
]

type SketchData = {
    title: string
    url: string
}

const sketches: SketchData[] = [
    {
        title: 'Code sketches in react and react three fiber',
        url: 'https://code-sketches-react.vercel.app/',
    },
    {
        title: 'CS 231129',
        url: 'https://cs-231129.vercel.app/',
    },
    {
        title: 'CS 231125',
        url: 'https://cs-231115.vercel.app/',
    },
]

function LinkIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}

export default function Creative() {
    return (
        <>
            <SimpleLayout
                title="Timelapses"
                intro="These timelapses are for fun and documenting my process. They are not intended as tutorials."
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {videos.map((video, i) => (
                        <Card as="li" key={i}>
                            <Image
                                src={video.thumbnail}
                                alt={`Video thumbail for ${video.title}`}
                                className="relative z-10 h-auto w-full rounded-lg"
                            />
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={video.url}>
                                    {video.title}
                                </Card.Link>
                            </h2>
                            {/* <Card.Description>{video.title}</Card.Description> */}
                            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                                <LinkIcon className="h-6 w-6 flex-none" />
                                <span className="ml-2">youtube.com</span>
                            </p>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
            <SimpleLayout
                title="Code Sketches"
                intro="Generative art and creative coding sketches"
            >
                <ul
                    role="list"
                    className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {sketches.map(({ title, url }, i) => (
                        <Card as="li" key={i}>
                            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                                <Card.Link href={url}>{title}</Card.Link>
                            </h2>
                        </Card>
                    ))}
                </ul>
            </SimpleLayout>
        </>
    )
}
