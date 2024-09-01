import { Airplay, ArrowLeft } from "lucide-react";
import Menu from "../menu/menu";
import { SidebarNav } from "./sidebar.style";
import { useSelector } from "react-redux";
import { openMenuToggle } from "../../redux/slice/toggle.slice";
import { useDispatch } from "react-redux";

function Sidebar() {
  const dispatch = useDispatch();
  const { menuToggle } = useSelector((state) => state.toggle);
  console.log(menuToggle);

  return (
    <SidebarNav
      className={`basis-72 w-72 h-svh  bg-custom-blue overflow-x-hidden overflow-y-auto xl:block lg:block   ${
        menuToggle ? "block" : "hidden "
      }`}
    >
      <div className=" siderbar-inner">
        <div className="w-72 brand-logo fixed top-0  z-50">
          <div className="flex items-center  py-5 bg-custom-blue">
            <span className="bg-blue-800 mr-2  text-white w-8 h-8 rounded-lg flex justify-center items-center">
              <Airplay />
            </span>

            <h1 className="text-3xl text-white font-medium">TailAdmin</h1>
            <span className="text-slate-500 cursor-pointer ml-10">
              <ArrowLeft
                className="block lg:hidden xl:hidden "
                onClick={() => dispatch(openMenuToggle())}
              />
            </span>
          </div>
        </div>
        <Menu />
      </div>
    </SidebarNav>
  );
}

export default Sidebar;
