import { Outlet, NavLink } from "react-router-dom";
import Logo from "../components/common/Logo";

function AdminLayout() {
  return (
    <div className="min-h-screen bg-navy-950">
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <NavLink to="/admin/login" aria-label="Campus Shield admin home">
            <Logo size="sm" variant="light" />
          </NavLink>
          <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/80">
            Admin Portal
          </span>
        </div>
      </header>
      <Outlet />
    </div>
  );
}

export default AdminLayout;

