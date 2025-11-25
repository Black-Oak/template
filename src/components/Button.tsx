import type { ReactNode, ButtonHTMLAttributes } from "react";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  disabled,
  ...props
}: ButtonProps) {
  const variantClass = `btn-glass-${variant}`;

  return (
    <button
      className={`btn-glass-base ${variantClass} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="flex-shrink-0">{icon}</span>
      )}
    </button>
  );
}
