interface CrownIconProps {
  className?: string;
  size?: number;
}

export function CrownIcon({ className = "", size = 20 }: CrownIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M12 2L14 8H22L16 12L18 22L12 16L6 22L8 12L2 8H10L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
