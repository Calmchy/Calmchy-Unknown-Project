import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { announcement } from '@/routes';

export default function Announcement() {
    return (
        <>
            <Head title="Announcement" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iste delectus ea vero cum eos cupiditate. Ab culpa quisquam quam, reiciendis eligendi, adipisci laboriosam expedita ut, cupiditate voluptatum libero? Vitae!</p>
        </>
    );
}

Announcement.layout = {
    breadcrumbs: [
        {
            title: 'Announcement',
            href: announcement(),
        },
    ],
};
