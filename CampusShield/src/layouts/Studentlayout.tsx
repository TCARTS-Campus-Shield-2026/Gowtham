import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import BottomNavigation from "../components/common/BottomNavigation";

function StudentLayout() {
  return (
    <div className="min-h-screen bg-blue-50/40">
      <Header />
      <Outlet />
      <BottomNavigation />
    </div>
  );
}

export default StudentLayout;

