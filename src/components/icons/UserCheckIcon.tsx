interface UserCheckIconProps {
  className?: string;
  size?: number;
}

export function UserCheckIcon({ className = "", size = 24 }: UserCheckIconProps) {
  return (
<svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_8342_47624)">
<path d="M12 12C15.3137 12 18 9.31371 18 6C18 2.68629 15.3137 0 12 0C8.68629 0 6 2.68629 6 6C6 9.31371 8.68629 12 12 12Z" fill="white"/>
<path d="M15.9602 13.9192L15.1202 21.3592L13.2002 15.5992L14.4002 14.0392C14.6402 13.6792 14.2802 13.1992 13.8002 13.1992H11.4002C10.9202 13.1992 10.6802 13.6792 10.8002 14.0392L11.8802 15.5992L9.9602 21.3592L9.0002 13.5592C4.4402 14.9992 1.2002 19.0792 1.2002 23.9992H22.8002C22.8002 19.4392 19.9202 15.4792 15.9602 13.9192ZM7.2002 21.5992H4.8002V19.7992C4.8002 19.4392 5.0402 19.1992 5.4002 19.1992H6.6002C6.9602 19.1992 7.2002 19.4392 7.2002 19.7992V21.5992Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_8342_47624">
<rect width={size} height={size} fill="white"/>
</clipPath>
</defs>
</svg>

  );
}
