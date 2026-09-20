import Header from "../components/Header"
import Sidebar from "../components/sidebar"

function Milestone() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>
          Milestone
        </main>
      </div>
    </div>
  )
}

export default Milestone