import Header from "../components/Header"
import Sidebar from "../components/sidebar"

function Tasks() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>
          Dashboard
        </main>
      </div>
    </div>
  )
}

export default Tasks