import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useMutationReports from "@/hooks/use-mutation-reports";

const ReportActions = ({ reportId }: { reportId: string }) => {
  const { deleteReportById } = useMutationReports();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="w-4 h-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>Edit report</DropdownMenuItem>
        <DropdownMenuItem>Copy link to report</DropdownMenuItem>
        <DropdownMenuItem className="text-yellow-500">
          Favorite report
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-red-500"
          onClick={() => deleteReportById(reportId)}
        >
          Delete report
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ReportActions;
