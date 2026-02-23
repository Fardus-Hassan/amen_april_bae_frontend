interface BarChartIconProps {
  className?: string;
  size?: number;
}

export function BarChartIcon({ className = "", size = 24 }: BarChartIconProps) {
  return (
<svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M21 3H3V14H6.88195L9.50002 8.76389L11.8148 13.3934L14.5381 5.22337L17.2386 14H21V3ZM21 15.9999H15.7614L14.4619 11.7765L12.1852 18.6065L9.50002 13.236L8.11805 15.9999H3V21H21V15.9999Z" fill="white"/>
</svg>

  );
}
