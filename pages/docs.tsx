import { FileText } from "lucide-react";
import GlassCard from "../src/components/GlassCard";

export default function DocsPage() {
  const version = "v1.0.0";
  const lastUpdate = "31/10/2025";

  return (
    <div className="content-container docs">
      <GlassCard>
        <header className="card-header">
          <h1 className="card-title">Documentation</h1>
          <div className="header-divider" />
        </header>

        <div className="doc-stack">
          <div className="doc-card">
            <div className="doc-card-header">
              <span className="doc-badge">1</span>
              <FileText size={20} className="doc-icon" />
              <h2>About This Template</h2>
            </div>
            <p>
              This is a frontend template built with Next.js and React. It
              includes a sidebar navigation, glass card components, and Tailwind
              CSS styling.
            </p>
            <ul>
              <li>Next.js for routing and SSR</li>
              <li>React with TypeScript</li>
              <li>Tailwind CSS for styling</li>
              <li>Responsive sidebar with glass effect</li>
              <li>Animated aurora background</li>
            </ul>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
