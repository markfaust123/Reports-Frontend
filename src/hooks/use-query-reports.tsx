import { fetchReports } from "@/lib/api";
import { useAppDispatch, useAppSelector } from "./use-redux";
import { setReports } from "@/store/reports";
import { useEffect } from "react";

function useQueryReports() {
  const dispatch = useAppDispatch();
  const reports = useAppSelector((state) => state.reportsState.reports);

  const loadReports = async () => {
    const fetchedReports = await fetchReports();
    dispatch(setReports({ reports: fetchedReports }));
  };

  useEffect(() => {
    loadReports();
  }, []);

  return { reports };
}

export default useQueryReports;
