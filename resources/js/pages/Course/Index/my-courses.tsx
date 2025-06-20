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
                    <Link href={route('course.view', {id: course.id})} prefetch>
                        <span>View Detail</span>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}