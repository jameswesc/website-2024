import { type Metadata } from 'next'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
    title: {
        template: '%s - James Gregory',
        default:
            'James Gregory - Software designer, founder, and amateur astronaut',
    },
    description: `I'm James Gregory, a software designer and engineer from
        the lands of the Gadigal People of the Eora Nation. I
        create performant, accessible, and delightful web
        applications with data and maps.`,
    alternates: {
        types: {
            'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
        },
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="h-full antialiased" suppressHydrationWarning>
            <body className="flex h-full bg-zinc-50 dark:bg-black">
                <Providers>
                    <div className="flex w-full">
                        <Layout>{children}</Layout>
                    </div>
                </Providers>
            </body>
        </html>
    )
}
