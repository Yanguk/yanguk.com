import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function Header() {
  return (
    <div>
      <Avatar>
        <AvatarFallback className="font-backyard">YU</AvatarFallback>
      </Avatar>
      <p>- About</p>
      <p>- blog</p>
    </div>
  );
}
