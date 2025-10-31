import { useRouter } from "next/router";
import { useEffect } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  useEffect(() => {
    document.body.dataset.route = router.pathname;
  }, [router.pathname]);

  return (
    <div className="app-container">
      <div id="aurora-bg"></div>

      <div className="sidebar-wrapper">
        <Sidebar />
      </div>

      <main className="content-container">{children}</main>
    </div>
  );
}
