import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { about } from '@/routes';

export default function About() {
    return (
        <>
            <Head title="About" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel eius atque obcaecati natus rerum repudiandae enim, eos perspiciatis officia, quis iste sed tempora doloribus nisi dolorem saepe numquam laboriosam?</p>
        </>
    );
}

About.layout = {
    breadcrumbs: [
        {
            title: 'About',
            href: about(),
        },
    ],
};
