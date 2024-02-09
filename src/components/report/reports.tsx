import Report from "./report";
import useQueryReports from "@/hooks/use-query-reports";

const Reports = () => {
  const { reports } = useQueryReports();

  return (
    <div className="">
      {reports.map((report) => (
        <Report report={report} key={report.id} />
      ))}
    </div>
  );
};

export default Reports;
