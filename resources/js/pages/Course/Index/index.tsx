import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, SharedData } from "@/types";
import { Head, usePage } from "@inertiajs/react";
import { router } from "@inertiajs/react";
import { CheckCircle2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import MyCourses from "./my-courses";


const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Course',
        href: '/course',
    },
];

export default function Course(){


    const { auth, flash } = usePage<SharedData>().props;

    const createCourse = () => {
        router.post(route('course.create', { user:  auth.user.id}))
    }

    const [message, setMessage] = useState<string | null>(flash.success);

    useEffect(() => {
        if (flash.success) {
          setMessage(flash.success);
      
          const timer = setTimeout(() => {
            setMessage(null);
          }, 2000);
      
          return () => clearTimeout(timer);
        }
      }, [flash.success]);
    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Course"/>
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4 overflow-x-auto">
                {message && (
                    <Alert>
                        <CheckCircle2Icon />
                        <AlertTitle>{message}</AlertTitle>
                    </Alert>
                )}
                <div>
                    <Button onClick={createCourse} className="mt-2">
                        Create Course
                    </Button>
                </div>
                <div>
                    <MyCourses/>
                </div>
            </div>
        </AppLayout>
    )
}
