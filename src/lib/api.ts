import { users, reports } from "@/lib/data/general";
import type { User, ReportWithUserData, Report } from "@/lib/types";
import { nanoid } from "nanoid";
import { getAuthenticatedUser } from "./auth";

// Mock database
const db = {
  users: [...users],
  reports: [...reports],
};

// Helper function to find a user by ID
export const findUser = async (id: string): Promise<User | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = db.users.find((user) => user.id === id);
      resolve(user);
    }, 200); // Simulate an API delay
  });
};

// Fetch all reports with user data
export const fetchReports = async (): Promise<ReportWithUserData[]> => {
  return new Promise((resolve) => {
    setTimeout(async () => {
      const sortedReports = db.reports.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime(),
      );
      const reportsWithUserData = await Promise.all(
        sortedReports.map(async (report) => ({
          ...report,
          user: await findUser(report.userId),
        })),
      );
      resolve(reportsWithUserData);
    }, 200); // Simulate an API delay
  });
};

// Create a report
export const createReport = async (
  title: string,
  description: string,
  url: string,
): Promise<Report> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user = getAuthenticatedUser();
      const newReport: Report = {
        id: nanoid(),
        userId: user.id,
        title,
        description,
        url,
        readCount: 0,
        commentCount: 0,
        timestamp: new Date().toISOString(),
      };
      db.reports.push(newReport);
      resolve(newReport);
    }, 200); // Simulate and API delay
  });
};

// Delete report by id
export const deleteReport = async (id: string): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      db.reports = db.reports.filter((report) => report.id !== id);
      resolve();
    }, 200); // Simulate an API delay
  });
};
