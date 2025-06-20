import { ICourses } from "@/types"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

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
            </Card>
        </div>
    )
}