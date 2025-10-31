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
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
        </div>
      </div>

      <h1 className="sidebar-title">
        <span className="title-line">
          <span className="title-short">App</span>
          <span className="title-full">My App</span>
        </span>
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
