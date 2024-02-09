import type { Comment, Read, Report, User } from "../types";

export const users: User[] = [
  {
    id: "u1",
    name: "Mark Faust",
    jhed: "mfaust4",
    classYear: "2026",
    teamName: "The Gold Sentiment Report",
    position: "Chief",
    isChief: true,
    avatarUrl: "GradPhotoSquare.png",
  },
  {
    id: "u2",
    name: "Harry Potter",
    jhed: "harry",
    classYear: "2025",
    teamName: "TCP",
    position: "Chief",
    isChief: true,
    avatarUrl: undefined,
  },
  {
    id: "u3",
    name: "Hermione Granger",
    jhed: "hermione",
    classYear: "2024",
    teamName: "Twitter",
    position: "Chief",
    isChief: true,
    avatarUrl: undefined,
  },
];

export const reports: Report[] = [
  {
    id: "p1",
    userId: "u1",
    title: "Report #1",
    description: "Do only what only you can do.",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-24T12:00:00Z",
  },
  {
    id: "p2",
    userId: "u1",
    title: "Report #2",
    description:
      "Elegance is not a dispensable luxury but a factor that decides between success and failure.",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-23T12:00:00Z",
  },
  {
    id: "p3",
    userId: "u2",
    title: "Report #3",
    description:
      "Beware of bugs in the above code; I have only proved it correct, not tried it.",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-22T12:00:00Z",
  },
  {
    id: "p4",
    userId: "u2",
    title: "Report #4",
    description:
      "Science is what we understand well enough to explain to a computer, Art is all the rest.",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-21T12:00:00Z",
  },
  {
    id: "p5",
    userId: "u3",
    title: "Report #5",
    description:
      "The most damaging phrase in the language is: 'It's always been done this way.'",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-20T12:00:00Z",
  },
  {
    id: "p6",
    userId: "u3",
    title: "Report #6",

    description:
      "To me programming is more than an important practical art. It is also a gigantic undertaking in the foundations of knowledge.",
    url: "none",
    readCount: 0,
    commentCount: 0,
    timestamp: "2023-07-19T12:00:00Z",
  },
];

export const comments: Comment[] = [
  {
    id: "c1",
    reportId: "p1",
    userId: "u3",
    content: "This is a fantastic thought!",
    timestamp: "2023-07-25T12:00:00Z",
  },
  {
    id: "c2",
    reportId: "p2",
    userId: "u2",
    content: "Absolutely agree.",
    timestamp: "2023-07-25T12:30:00Z",
  },
  {
    id: "c3",
    reportId: "p2",
    userId: "u3",
    content: "Well said.",
    timestamp: "2023-07-25T12:45:00Z",
  },
  {
    id: "c4",
    reportId: "p4",
    userId: "u1",
    content: "Absolutely correct.",
    timestamp: "2023-07-25T12:00:00Z",
  },
  {
    id: "c5",
    reportId: "p5",
    userId: "u2",
    content: "This is a wonderful quote.",
    timestamp: "2023-07-25T12:30:00Z",
  },
  {
    id: "c6",
    reportId: "p6",
    userId: "u1",
    content: "I totally agree.",
    timestamp: "2023-07-25T12:45:00Z",
  },
];

export const reads: Read[] = [
  { id: "l1", reportId: "p1", userId: "u2" },
  { id: "l2", reportId: "p1", userId: "u3" },
  { id: "l3", reportId: "p2", userId: "u3" },
  { id: "l4", reportId: "p3", userId: "u1" },
  { id: "l5", reportId: "p4", userId: "u1" },
  { id: "l6", reportId: "p4", userId: "u3" },
  { id: "l7", reportId: "p5", userId: "u1" },
  { id: "l8", reportId: "p5", userId: "u2" },
  { id: "l9", reportId: "p6", userId: "u2" },
];
