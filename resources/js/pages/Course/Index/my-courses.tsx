import { ICourses } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Link } from "@inertiajs/react";

interface MyCoursesProps{
    course: ICourses;
}

export default function MyCourses({course}: MyCoursesProps){
    return(
        <div>
            <Card>
                <CardHeader>
                    <CardTitle>{course.name}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
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
        </div>
    )
}