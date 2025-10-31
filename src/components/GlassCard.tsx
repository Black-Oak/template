import type { ReactNode } from "react";

export type GlassCardProps = {
  children?: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}
