import InputError from "@/components/input-error";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AppLayout from "@/layouts/app-layout";
import { BreadcrumbItem, SharedData } from "@/types"
import { Head, useForm, usePage } from "@inertiajs/react"
import { LoaderCircle } from "lucide-react";
import { FormEventHandler } from "react";

type CourseForm = {
    name: string;
    description: string;
}

export default function Edit(){
    const {course} = usePage<SharedData>().props

    const { data, setData, post, processing, errors, reset } = useForm<Required<CourseForm>>({
        name: course.name,
        description: course.description,
    });
    
    const breadcrumbs: BreadcrumbItem[] = [
        {
            title: 'Course',
            href: '/course',
        },
    ];

    const submit:FormEventHandler = (e) => {
        e.preventDefault();
        post(route('course.update', {course: course.id}));
    }

    return(
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Edit Course"/>

            <form className="flex flex-col gap-6" onSubmit={submit}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Course Name</Label>
                        <Input
                            id="name"
                            type="text"
                            autoFocus
                            tabIndex={1}
                            autoComplete="name"
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                        />
                        <InputError message={errors.name} />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="description">Course Description</Label>
                        <Input
                            id="description"
                            type="text"
                            autoFocus
                            tabIndex={1}
                            autoComplete="description"
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                        />
                        <InputError message={errors.description} />
                    </div>

                    <Button type="submit" className="mt-4 w-full" tabIndex={4} disabled={processing}>
                        {processing && <LoaderCircle className="h-4 w-4 animate-spin" />}
                        Edit Course
                    </Button>
                </div>
            </form>
        </AppLayout>
    )
}