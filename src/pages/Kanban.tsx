import Header from "../components/Header"
import Sidebar from "../components/sidebar"

function Kanban() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>
          Kanban
        </main>
      </div>
    </div>
  )
}

export default Kanban