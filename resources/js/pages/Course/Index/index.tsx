import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Course',
        href: '/course',
    },
];

export default function Course(){


    const { auth } = usePage<SharedData>().props;

    const createCourse = () => {
        router.post(route('course.create', { user:  auth.user.id}))
    }

    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Course"/>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                <div>
                    <Button onClick={createCourse} className="mt-2">
                        Create Course
                    </Button>
                </div>
            </div>
        </AppLayout>
    )
}
