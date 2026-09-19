import { NavLink } from "react-router-dom";

function Sidebar() {
  const elements = [
  { name: "Overview", path: "/" },
  { name: "Tasks", path: "/tasks" },
  { name: "Kanban", path: "/kanban" },
  { name: "Milestone", path: "/milestone" },
  { name: "Notes", path: "/notes" },
  { name: "Activity", path: "/activity" },
  { name: "Github", path: "/github" },
];

  return (
    <aside className="bg-cyan-100 w-55 flex flex-col gap-2 pt-5 ps-1 border-gray-200 border-r-3">
      <p>Devlog</p>
      <p>General</p>

      <NavLink to="/Dashboard" className={({ isActive }) => isActive
              ? "opacity-85 bg-black text-white items-center justify-center flex py-1 rounded-xl"
              : "bg-black rounded-xl text-white font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"
          } >Dashboard</NavLink>
      <NavLink to="/Project" className={({ isActive }) => isActive
              ? "opacity-85 bg-black text-white items-center justify-center flex py-1 rounded-xl"
              : "bg-black rounded-xl text-white font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"
          }>Project</NavLink>

      <p>Devlog</p>

      {elements.map((element) => (
        <NavLink
          key={element.name}
          to={element.path}
          className={({ isActive }) =>
            isActive
              ? "opacity-85 bg-black text-white items-center justify-center flex py-1 rounded-xl"
              : "bg-black text-white rounded-xl font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"
          }
        >
          {element.name}
        </NavLink>
      ))}

      <div className="flex w-full max-w-52 bg-gray-400 h-0.5"></div>

      <NavLink to="/">Settings</NavLink>
      <NavLink to="/">Profile</NavLink>
    </aside>
  );
}

export default Sidebar;