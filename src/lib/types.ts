/*
Need to add properties, eventually:
- email
- phone number
- image
*/

export type User = {
  id: string;
  name: string;
  jhed: string;
  classYear: string;
  teamName: string;
  position: string;
  isChief: boolean;
  avatarUrl?: string;
};

export type Report = {
  id: string;
  userId: string;
  title: string;
  description: string;
  url: string;
  readCount: number;
  commentCount: number;
  timestamp: string;
};

export type ReportWithUserData = Report & { user?: User };

export type Read = {
  id: string;
  reportId: string;
  userId: string;
};

export type Comment = {
  id: string;
  reportId: string;
  userId: string;
  content: string;
  timestamp: string;
};

export type NavigationBarItem = {
  title: string;
  components: NavigationBarItemComponent[];
};

type NavigationBarItemComponent = {
  title: string;
  href: string;
  description: string;
};
