import Header from "../components/Header"
import Sidebar from "../components/sidebar"

function Github() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>
          Github
        </main>
      </div>
    </div>
  )
}

export default Github