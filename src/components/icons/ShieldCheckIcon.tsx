interface ShieldCheckIconProps {
  className?: string;
  size?: number;
}

export function ShieldCheckIcon({ className = "", size = 24 }: ShieldCheckIconProps) {
  return (
<svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
<path d="M40.5 10.3633V24C40.5 30.6719 36.4254 35.5326 32.0938 38.8174C29.9427 40.4486 27.7823 41.6461 26.1562 42.4365C25.3453 42.8307 24.6721 43.1212 24.2061 43.3115C24.1323 43.3416 24.063 43.3675 24 43.3926C23.937 43.3675 23.8677 43.3416 23.7939 43.3115C23.3279 43.1212 22.6547 42.8307 21.8438 42.4365C20.2177 41.6461 18.0573 40.4486 15.9062 38.8174C11.5746 35.5326 7.5 30.6719 7.5 24V10.3633L24 4.58887L40.5 10.3633Z" stroke="#111111" stroke-width="3"/>
<path d="M6 9.3V24C6 38.7 24 45 24 45C24 45 42 38.7 42 24V9.3L24 3L6 9.3Z" stroke="#111111" stroke-width="3" stroke-linecap="square"/>
<path d="M16.3457 22.3435L21.9997 27.9995L33.3137 16.6855" stroke="#111111" stroke-width="3" stroke-linecap="square"/>
</svg>



  );
}
