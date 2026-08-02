import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { faq } from '@/routes';

export default function Faq() {
    return (
        <>
            <Head title="Faq" />
        </>
    );
}

Faq.layout = {
    breadcrumbs: [
        {
            title: 'Faq',
            href: faq(),
        },
    ],
};
