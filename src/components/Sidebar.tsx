import { NavLink } from "react-router-dom";
import Widget from '../assets/Widget.png'
import Project from '../assets/Project.png'
import WidgetVar1 from '../assets/WidgetVar1.png'
import Checkmark from '../assets/Checkmark.png'
import Data from '../assets/Data.png'
import Flag from '../assets/Flag.png'
import Docs from '../assets/DocumentVar1.png'
import Heartbeat from '../assets/HeartIbeart.png'
import Arrow from '../assets/Arrow.png'
import Settings from '../assets/SettingsVar1.png'

function Sidebar() {
  const elements = [
  { name: "Overview", path: "/", image: WidgetVar1},
  { name: "Tasks", path: "/tasks", image: Checkmark},
  { name: "Kanban", path: "/kanban", image: Data},
  { name: "Milestone", path: "/milestone", image: Flag},
  { name: "Notes", path: "/notes", image: Docs},
  { name: "Activity", path: "/activity", image: Heartbeat},
  { name: "Github", path: "/github", image: Arrow},
];

  return (
    <aside className="bg-blackBG w-55  border-gray-200 border-r-3">
      <div className="flex flex-col gap-2 pt-5 ps-1">
        <div>
          <p className="text-white">Devlog</p>
      <p className="text-GrayText font-SubjectFont text-[12px] opacity-60">General</p>

      <NavLink to="/Dashboard" className={({ isActive }) => isActive
              ? "bg-blackActiveButton border-l-themeLigthblueIcon border-l-2 text-white items-center pl-2 flex py-1 rounded-s-sm mb-1 mt-1.5 text-[13px]"
              : "bg-blackBG rounded-s-sm text-white font-light py-1 hover:cursor-pointer hover:opacity-85 hover:bg-blackActiveButton items-center pl-2.5 flex mb-1 mt-1.5 text-[13px]"
          }><img className="mr-2" src={Widget}/>Dashboard</NavLink>
      <NavLink to="/Project" className={({ isActive }) => isActive
              ? "bg-blackActiveButton border-l-themeLigthblueIcon border-l-2 text-white items-center pl-2 flex py-1 rounded-s-sm mb-3.5 text-[13px]"
              : "bg-blackBG rounded-s-sm text-white font-light py-1 hover:cursor-pointer hover:opacity-85 hover:bg-blackActiveButton items-center pl-2.5 flex mb-3.5 text-[13px]"
          }><img className="mr-2" src={Project}/>Project</NavLink>

      <p className="text-GrayText font-SubjectFont text-[12px] mb-1.5 opacity-60">CURRENT PROJECT</p>
      <div>
         {elements.map((element) => (
          <NavLink
            key={element.name}
            to={element.path}
            className={({ isActive }) =>
              isActive
                ? "bg-blackActiveButton border-l-themeLigthblueIcon border-l-2 text-[13px] text-white items-center pl-2 flex py-1 rounded-s-sm mb-1"
                : "bg-blackBG text-white rounded-s-sm font-light py-1 hover:cursor-pointer text-[13px] hover:opacity-85 hover:bg-blackActiveButton items-center pl-2.5 flex mb-1"
            }
          >
            <img src={element.image} className="pr-2"/>{element.name}
          </NavLink>
        ))} 
      </div>
        </div>
        
        

      <div className="flex flex-col border-t-gray-600 border-t">
      <NavLink
        to="/"
        className="flex items-center gap-2 text-white"
      >
        <img className="ml-2 h-3.5" src={Settings} alt=""/>
        <p className="text-[12px]">Settings</p>
      </NavLink>
      <NavLink to="/" className="text-white">
        Profile
      </NavLink>
      </div>
      </div>
    </aside>
  );
}

export default Sidebar;