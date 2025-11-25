import type { ReactNode, ButtonHTMLAttributes } from "react";

export type IconButtonVariant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "info";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  icon: ReactNode;
  variant?: IconButtonVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
  tooltip?: string;
};

export default function IconButton({
  icon,
  variant = "secondary",
  size = "md",
  className = "",
  disabled,
  tooltip,
  ...props
}: IconButtonProps) {
  const sizeClass = `icon-btn-${size}`;
  const variantClass = `icon-btn-glass-${variant}`;

  return (
    <button
      className={`icon-btn-glass-base ${sizeClass} ${variantClass} ${className}`}
      disabled={disabled}
      title={tooltip}
      {...props}
    >
      <span className="flex items-center justify-center">{icon}</span>
    </button>
  );
}
