import { Head } from '@inertiajs/react';
import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { faq } from '@/routes';

export default function Faq() {
    return (
        <>
            <Head title="Faq" />
            <br />
            <Card>
                <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Your content here...</p><br />
                    <Button>Contact Support</Button>
                </CardContent>
            </Card>
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
