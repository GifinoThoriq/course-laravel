import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, SharedData } from "@/types"
import { Head, usePage } from "@inertiajs/react"

export default function View(){

    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Course',
            href: '/course',
        },
    ];

    const {course} = usePage<SharedData>().props
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="View Course"/>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <h1>{course.name}</h1>
                <h2>{course.description}</h2>
            </div>
        </AppLayout>
    )
}