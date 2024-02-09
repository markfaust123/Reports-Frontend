import { User } from "./types";

// Hardcoded authenticated user data for Mark Faust
const authenticatedUser: User = {
  id: "u1",
  name: "Mark Faust",
  jhed: "mfaust4",
  classYear: "2026",
  teamName: "The Gold Sentiment Report",
  position: "Chief",
  isChief: true,
  avatarUrl: "GradPhotoSquare.png",
};

export const getAuthenticatedUser = (): User => {
  // For now, this simply returns the hardcoded user.
  // In the future, this can be replaced with actual authentication logic.
  return authenticatedUser;
};
