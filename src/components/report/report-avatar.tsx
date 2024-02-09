import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getInitials } from "@/lib/utils";

type ReportAvatarProps = {
  name: string;
  avatarUrl?: string;
};

function ReportAvatar({ name, avatarUrl }: ReportAvatarProps) {
  return (
    <Avatar>
      <AvatarImage src={avatarUrl} />
      <AvatarFallback>{getInitials(name)}</AvatarFallback>
    </Avatar>
  );
}

export default ReportAvatar;
