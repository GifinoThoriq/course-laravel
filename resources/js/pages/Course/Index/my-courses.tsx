import { ICourses } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Link } from "@inertiajs/react";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Delete from "../Delete/Index";

interface MyCoursesProps{
    course: ICourses;
}

export default function MyCourses({course}: MyCoursesProps){

    const [open, setOpen] = useState(false);

    return(
        <div>
            <Card>
                <CardHeader className="flex flex-row justify-between items-start">
                    <div>
                        <CardTitle>{course.name}</CardTitle>
                        <CardDescription>{course.description}</CardDescription>
                    </div>
                        <div onClick={()=>setOpen(true)}>
                            <span>{<Trash2Icon/>}</span>
                        </div>
                </CardHeader>
                <CardFooter>
                    <Link href={route('course.view', {id: course.id})} prefetch className="mr-2">
                        <span>View</span>
                    </Link>
                    <Link href={route('course.edit', {id: course.id})} prefetch>
                        <span>Edit</span>
                    </Link>
                </CardFooter>
            </Card>

            <Delete open={open} setOpen={setOpen} id={course.id}/>
        </div>
    )
}