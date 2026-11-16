import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "full" | "compact" | "emblem";
  theme?: "dark" | "light";
  className?: string;
  asLink?: boolean;
}

export const SakinaEmblem: React.FC<{
  className?: string;
  theme?: "dark" | "light";
}> = ({ className = "w-10 h-10", theme = "dark" }) => {
  const primaryColor = theme === "light" ? "#F7F6F0" : "#29463F";
  const secondaryColor = theme === "light" ? "#AAB9A7" : "#8FA38B";
  const accentColor = theme === "light" ? "#E4C3BC" : "#C38D7E";

  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer organic sanctuary arch */}
      <path
        d="M 20 82 C 20 44, 34 16, 50 16 C 66 16, 80 44, 80 82"
        stroke={primaryColor}
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Inner embracing curve / human connection wave */}
      <path
        d="M 33 82 C 33 55, 41 34, 50 34 C 59 34, 67 55, 67 82"
        stroke={secondaryColor}
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Central dot symbolizing inner peace / presence / spark of calm */}
      <circle cx="50" cy="54" r="5.5" fill={accentColor} />
      {/* Grounding horizontal organic foundation */}
      <path
        d="M 16 86 C 30 84, 70 84, 84 86"
        stroke={primaryColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  variant = "full",
  theme = "dark",
  className = "",
  asLink = true,
}) => {
  const textColor = theme === "light" ? "text-ivory-100" : "text-forest-500";
  const descColor = theme === "light" ? "text-sage-200" : "text-charcoal-500";
  const enColor = theme === "light" ? "text-ivory-200" : "text-forest-600";

  const content = (
    <div className={`inline-flex items-center gap-3.5 select-none ${className}`}>
      <SakinaEmblem
        theme={theme}
        className={
          variant === "emblem"
            ? "w-11 h-11"
            : variant === "compact"
            ? "w-9 h-9"
            : "w-11 h-11"
        }
      />

      {variant !== "emblem" && (
        <div className="flex flex-col text-right">
          <div className="flex items-baseline gap-2">
            <span
              className={`font-alexandria font-bold tracking-tight text-2xl leading-none ${textColor}`}
            >
              سَكينة
            </span>
            <span
              className={`font-alexandria text-xs uppercase tracking-[0.2em] font-medium opacity-80 ${enColor}`}
            >
              SAKINA
            </span>
          </div>

          {variant === "full" && (
            <span
              className={`text-[11px] font-ibm font-normal mt-1 tracking-wide ${descColor}`}
            >
              عيادات الصحة النفسية
            </span>
          )}
        </div>
      )}
    </div>
  );

  if (asLink) {
    return (
      <Link
        href="/"
        className="transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-400 rounded-lg p-0.5"
        aria-label="سَكينة - عيادات الصحة النفسية - الصفحة الرئيسية"
      >
        {content}
      </Link>
    );
  }

  return content;
};
