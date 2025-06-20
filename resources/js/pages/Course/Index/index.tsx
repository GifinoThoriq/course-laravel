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


    const { auth, flash, courses } = usePage<SharedData>().props;

    const createCourse = () => {
        router.post(route('course.create', { user:  auth.user.id}))
    }

    const [message, setMessage] = useState<string | null>(flash.success);

    console.log(flash)

    useEffect(() => {
        if (flash.success && flash.flash_id) {
          setMessage(flash.success);
      
          const timer = setTimeout(() => {
            setMessage(null);
          }, 2000);
      
          return () => clearTimeout(timer);
        }
      }, [flash.flash_id]);
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
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {courses.map((course, index) => (
                        <MyCourses key={index} course={course}/>
                    )) }
                </div>
            </div>
        </AppLayout>
    )
}
