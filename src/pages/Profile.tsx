import Header from "../components/Header"
import Sidebar from "../components/sidebar"

function Profile() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main>
          Profile
        </main>
      </div>
    </div>
  )
}

export default Profile