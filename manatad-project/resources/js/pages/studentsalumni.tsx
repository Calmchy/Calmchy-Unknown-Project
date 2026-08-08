import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { studentsalumni } from '@/routes';

export default function Studentsalumni() {
    return (
        <>
            <Head title="Students & Alumni" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate expedita, ex sint eveniet facere vel assumenda sed porro consequatur est saepe? Aperiam, ducimus. Molestiae consequuntur aliquam dolores quidem aut.</p>
        </>
    );
}

Studentsalumni.layout = {
    breadcrumbs: [
        {
            title: 'Students & Alumni',
            href: studentsalumni(),
        },
    ],
};
