import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link, router } from "@inertiajs/react";

interface DeleteProps{
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    id: number;
}

export default function Delete({open, setOpen, id}: DeleteProps){

    const handleDelete = () => {
        router.delete(route('course.delete',{course: id}))
    }

    return(
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your course
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button 
                        variant={'destructive'}
                        onClick={handleDelete}
                    >Delete</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}