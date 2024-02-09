import { Button } from "@/components/ui/button";
import {
  ChatBubbleIcon,
  EyeClosedIcon,
  EyeOpenIcon,
} from "@radix-ui/react-icons";
import ReportActions from "./report-actions";
import { useState } from "react";

function ReportFooter({ reportId }: { reportId: string }) {
  const [reportRead, setReportRead] = useState<boolean>(false);
  const [reads, setReads] = useState<number>(0);

  return (
    <div className="flex justify-between mb-2">
      <Button
        onClick={() => {
          if (reportRead) {
            setReportRead(false);
            setReads((currReads) => currReads - 1);
          } else {
            setReportRead(true);
            setReads((currReads) => currReads + 1);
          }
        }}
        variant="ghost"
        size="sm"
      >
        {reportRead ? (
          <EyeOpenIcon className="w-5 h-5 opacity-50" />
        ) : (
          <EyeClosedIcon className="w-5 h-5 opacity-50" />
        )}
        {reads > 0 && <sup>{reads}</sup>}
      </Button>
      <Button variant="ghost" size="sm">
        <ChatBubbleIcon className="w-5 h-5 opacity-50" />
      </Button>
      <ReportActions reportId={reportId} />
    </div>
  );
}

export default ReportFooter;
