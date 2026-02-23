interface QuoteMarkIconProps {
  className?: string;
  size?: number;
}

export function QuoteMarkIcon({
  className = "",
  size = 48,
}: QuoteMarkIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <path
        d="M15.6876 0L10.6045 14.1176H17.1775V30H0V15.7059L6.66067 0H15.6876ZM37.5101 0L32.427 14.1176H39V30H21.8225V15.7059L28.4831 0H37.5101Z"
        fill="currentColor"
      />
    </svg>
  );
}
