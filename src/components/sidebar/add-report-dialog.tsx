import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import useMutationReports from "@/hooks/use-mutation-reports";
import { Textarea } from "../ui/textarea";
import { useToast } from "../ui/use-toast";

export const AddReportDialog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  const { addNewReport } = useMutationReports();
  const { toast } = useToast();

  const handleSubmit = async () => {
    if (title && description && url) {
      await addNewReport(title, description, url);
      setTitle("");
    } else {
      toast({
        variant: "destructive",
        title: "Sorry! Details cannot be empty! 🙁",
        description: "Please enter all report details.",
      });
    }
  };

  const handleCancel = () => {
    setTitle("");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button aria-label={"Make a Report"} variant="default" size="sm">
          <PlusCircledIcon className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Report</DialogTitle>
          <DialogDescription>
            Provide the details of your report here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              value={title}
              placeholder="Ex: Week X Progress Report"
              className="col-span-3"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Textarea
              id="description"
              value={description}
              placeholder="Ex: Completion of A B C"
              className="col-span-3"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
            <Label htmlFor="url" className="text-right">
              Url
            </Label>
            <Input
              id="url"
              value={url}
              placeholder="Ex: Google Drive PDF"
              className="col-span-3"
              onChange={(e) => {
                setUrl(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant={"secondary"} type="reset" onClick={handleCancel}>
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
