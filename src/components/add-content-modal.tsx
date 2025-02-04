import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function AddContentModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Add Content</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Lecture Content</DialogTitle>
        </DialogHeader>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Select Lecture
          </label>
          <select className="mt-1 block w-full border p-2 rounded">
            <option>Create New Lecture</option>
            <option>Lecture 1</option>
            <option>Lecture 2</option>
          </select>
        </div>
        <div className="border-dashed border-2 border-muted p-8 text-center">
          <p>Drag &amp; drop files here or click to select</p>
          <p className="text-sm text-muted-foreground">
            Accepted formats: PDF, Word, MD, TXT, PPT
          </p>
        </div>
        <DialogFooter>
          <Button type="submit">Upload</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
