import Link from "next/link";
import { useRouter } from "next/router";
import { Home, FileText, Settings } from "lucide-react";

export default function Sidebar() {
  const router = useRouter();

  const isActive = (path: string) => router.pathname === path;

  return (
    <div className="sidebar-container">
      <div className="sidebar-logo-container">
        <div className="sidebar-logo">
          <img src="/logo_bo_blanc.png" alt="Logo" />
        </div>
      </div>

      <h1 className="sidebar-title">
        <span className="title-line">My App</span>
      </h1>

      <nav aria-label="Navigation principale">
        <ul>
          <li>
            <Link
              href="/"
              className={isActive("/") ? "nav-link active" : "nav-link"}
            >
              <div className="nav-link-content">
                <Home size={20} />
                <span>Home</span>
              </div>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <ul>
          <li>
            <Link
              href="/docs"
              className={isActive("/docs") ? "nav-link active" : "nav-link"}
            >
              <div className="nav-link-content">
                <FileText size={20} />
                <span>Documentation</span>
              </div>
            </Link>
          </li>
          <li>
            <Link
              href="/admin"
              className={isActive("/admin") ? "nav-link active" : "nav-link"}
            >
              <div className="nav-link-content">
                <Settings size={20} />
                <span>Admin</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
