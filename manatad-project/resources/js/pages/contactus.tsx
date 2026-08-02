import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { contactus } from '@/routes';

export default function Contactus() {
    return (
        <>
            <Head title="Contactus" />
            <p>The contact page area....</p>
        </>
    );
}

Contactus.layout = {
    breadcrumbs: [
        {
            title: 'Contactus',
            href: contactus(),
        },
    ],
};
