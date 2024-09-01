import React from "react";
import { HeaderWrapper } from "./header.style";
import { Search } from "lucide-react";

function Header() {
  return (
    <HeaderWrapper>
      <div className="search-and-input">
        <div className="search-icon mr-3 text-slate-400">
          <Search className="size-5" />
        </div>

        <input
          type="text"
          className="seach-input text-slate-400"
          placeholder="Type here..."
        />
      </div>
    </HeaderWrapper>
  );
}

export default Header;
