import { type Metadata } from 'next'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata: Metadata = {
    title: 'Creative Coding',
    description: '🚧 A collection of creative coding projects',
}

export default function Projects() {
    return (
        <SimpleLayout
            title="Creative Coding"
            intro="🚧 A collection of creative coding projects"
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            ></ul>
        </SimpleLayout>
    )
}
