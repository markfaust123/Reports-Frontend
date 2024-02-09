import type { ReportWithUserData } from "@/lib/types";
import ReportFooter from "./report-footer";
import ReportHeader from "./report-header";
import ReportAvatar from "./report-avatar";
import ReportDetails from "./report-details";

const Report = ({ report }: { report: ReportWithUserData }) => {
  const { id, title, description, url, user, timestamp } = report;

  // The code below uses Optional Chaining (?.) and Nullish Coalescing (??)
  const name = user?.name ?? "Unknown";
  const jhed = user?.jhed ?? "Unknown";
  const avatarUrl = user?.avatarUrl;

  return (
    <div className="flex border-b border-slate-400">
      <div className="p-4">
        <ReportAvatar avatarUrl={avatarUrl} name={name} />
      </div>
      <div className="w-full pt-4 pr-4">
        <ReportHeader name={name} jhed={jhed} timestamp={timestamp} />
        <ReportDetails title={title} description={description} url={url} />
        <ReportFooter reportId={id} />
      </div>
    </div>
  );
};

export default Report;
