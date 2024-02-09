import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const ProfileAvatar = () => {
  return (
    <Avatar>
      <AvatarImage src="GradPhotoSquare.png" />
      <AvatarFallback>ME</AvatarFallback>
    </Avatar>
  );
};

export default ProfileAvatar;
