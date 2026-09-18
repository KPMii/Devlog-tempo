import { NavLink } from "react-router-dom"

function Home() {

  const elements = [
    {name: 'Overview', path: <Home/>},
    {name: 'Tasks', path: <></>},
    {name: 'Kanban', path: <></>},
    {name: 'Milestones', path: <></>},
    {name: 'Notes', path: <></>},
    {name: 'Activity', path: <></>},
    {name: 'Github', path: <></>},  ]



  return (
    <div className='flex min-h-screen'>
        

      <aside className="bg-cyan-100 w-55 flex flex-col gap-2 pt-5 ps-1 border-gray-200 border-r-3">
        <p>Devlog</p>
        <p>General</p>
        <NavLink to='/' className={"bg-black text-white rounded-xl font-light py-2 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"}>Dashboard</NavLink>
        <NavLink to='/' className={"bg-black text-white rounded-xl font-light py-2 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"} >Project</NavLink>

        <p>Devlog</p>
        {elements.map((element)=>(
          <NavLink
            key={element.name} 
            to={"/"} 
            className={({isActive}) => isActive ? "opacity-85 bg-black text-white items-center justify-center flex py-1" : "bg-black text-white rounded-xl font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"}>
            {element.name}
          </NavLink>
        ))}
        <div className="flex w-full max-w-52 bg-gray-400 h-0.5"></div>
        <NavLink to='/' className={"bg-black text-white rounded-xl font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"}>Settings</NavLink>
        <NavLink to='/' className={"bg-black text-white rounded-xl font-light py-1 hover:cursor-pointer hover:opacity-85 items-center justify-center flex"}>Profile</NavLink>
      </aside>
      Home
    </div>
  )
}

export default Home