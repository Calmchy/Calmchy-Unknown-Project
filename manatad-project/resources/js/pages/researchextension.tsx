import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { researchextension } from '@/routes';

export default function Researchextension() {
    return (
        <>
            <Head title="Research & Extension" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate expedita, ex sint eveniet facere vel assumenda sed porro consequatur est saepe? Aperiam, ducimus. Molestiae consequuntur aliquam dolores quidem aut.</p>
        </>
    );
}

Researchextension.layout = {
    breadcrumbs: [
        {
            title: 'Reasearch & Extension',
            href: researchextension(),
        },
    ],
};
