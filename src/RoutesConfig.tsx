import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Project from "./pages/Project";
import Tasks from "./pages/Tasks";
import Kanban from "./pages/Kanban";
import Milestone from "./pages/Milestone";
import Notes from "./pages/Notes";
import Activity from "./pages/Activity";
import Github from "./pages/Github";

function RoutesConfig() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/project" element={<Project />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/milestone" element={<Milestone />} />
      <Route path="/notes" element={<Notes />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/github" element={<Github />} />
    </Routes>
  );
}

export default RoutesConfig;