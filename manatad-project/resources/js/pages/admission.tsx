import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { admission } from '@/routes';

export default function Admission() {
    return (
        <>
            <Head title="Admission" />
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, iste delectus ea vero cum eos cupiditate. Ab culpa quisquam quam, reiciendis eligendi, adipisci laboriosam expedita ut, cupiditate voluptatum libero? Vitae!</p>
        </>
    );
}

Admission.layout = {
    breadcrumbs: [
        {
            title: 'Admission',
            href: admission(),
        },
    ],
};
