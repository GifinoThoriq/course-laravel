import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem } from "@/types";
import { Head, usePage } from "@inertiajs/react";

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin',
        href: '/admin',
    },
];


export default function ManageUsers(){

    const page = usePage().props;
    
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Admin - Manage Users"/>
            <div>ini adalah admin user</div>
        </AppLayout>
    )
}