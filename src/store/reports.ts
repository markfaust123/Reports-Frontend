import { getAuthenticatedUser } from "@/lib/auth";
import { reports } from "@/lib/data/general";
import type { ReportWithUserData } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

const reportsSlice = createSlice({
  name: "reports",
  initialState: {
    reports: reports as ReportWithUserData[],
  },
  reducers: {
    addReport: (state, action) => {
      const user = getAuthenticatedUser();
      const newReport: ReportWithUserData = {
        ...action.payload.report,
        user,
      };
      state.reports = [newReport, ...state.reports];
    },
    removeReport: (state, action) => {
      state.reports = state.reports.filter(
        (report) => report.id !== action.payload.removeId,
      );
    },
    updateReport: (state, action) => {
      const updateableItemIndex = state.reports.findIndex(
        (report) => report.id === action.payload.updateId,
      );
      const updateableItem = state.reports[updateableItemIndex];
      const updatedItem = { ...updateableItem, ...action.payload.data };
      state.reports[updateableItemIndex] = updatedItem;
    },
    setReports: (state, action) => {
      state.reports = action.payload.reports;
    },
  },
});

export const addReport = reportsSlice.actions.addReport;
export const removeReport = reportsSlice.actions.removeReport;
export const updateReport = reportsSlice.actions.updateReport;
export const setReports = reportsSlice.actions.setReports;
export default reportsSlice.reducer;
