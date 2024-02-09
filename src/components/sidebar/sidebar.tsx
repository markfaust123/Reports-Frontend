import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import ProfileAvatar from "./profile-avatar";
import { AddReportDialog } from "./add-report-dialog";

const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 p-4">
      <ProfileAvatar />
      <Button aria-label={"Search"} variant="ghost" size="sm">
        <MagnifyingGlassIcon className="w-5 h-5" />
      </Button>
      <AddReportDialog />
    </div>
  );
};

export default Sidebar;
