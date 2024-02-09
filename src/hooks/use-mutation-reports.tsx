import { createReport, deleteReport } from "@/lib/api";
import { useAppDispatch } from "./use-redux";
import { addReport, removeReport } from "@/store/reports";

function useMutationReports() {
  const dispatch = useAppDispatch();

  const addNewReport = async (
    title: string,
    description: string,
    url: string,
  ) => {
    const newReport = await createReport(title, description, url);
    dispatch(addReport({ report: newReport }));
  };

  const deleteReportById = async (reportId: string) => {
    await deleteReport(reportId);
    dispatch(removeReport({ removeId: reportId }));
  };

  return { addNewReport, deleteReportById };
}

export default useMutationReports;
