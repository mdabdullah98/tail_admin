import { HeaderWrapper } from "./header.style";
import {
  Search,
  Menu,
  BellDot,
  MessageSquareMore,
  ChevronDown,
} from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { useDispatch } from "react-redux";
import { openMenuToggle } from "../../redux/slice/toggle.slice";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Header() {
  const dispatch = useDispatch();
  return (
    <HeaderWrapper className="w-auto shadow-lg bg-white">
      <div>
        <Menu
          className="block lg:hidden xl:hidden  cursor-pointer mr-3"
          onClick={() => dispatch(openMenuToggle())}
        />
      </div>
      <div className="search-and-input ">
        <div className="search-icon mr-3 text-slate-400">
          <Search className="size-5" />
        </div>

        <input
          type="text"
          className="seach-input text-slate-400"
          placeholder="Type to search..."
        />
      </div>

      <div className="flex items-center">
        <span>
          <Switch />
        </span>
        <span className=" w-8 h-8 bg-slate-100 rounded-2xl flex justify-center items-center mx-2">
          <BellDot className="size-4 " />
        </span>
        <span className="w-8 h-8 bg-slate-100 rounded-2xl flex justify-center items-center mx-2">
          <MessageSquareMore className="size-4 " />
        </span>
      </div>

      <div className="avatar-dropdown">
        <div className="avatar-text">
          <p className="text-xm">Thomas Anree</p>
          <p className="text-xs text-right">ux/ux designer</p>
        </div>
        <Avatar className="mx-2">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <DropdownMenu>
          <DropdownMenuTrigger>
            <ChevronDown />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
