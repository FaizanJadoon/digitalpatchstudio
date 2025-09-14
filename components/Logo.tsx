export default function Logo({ variant = "light", className = "" }: { variant?: "light"|"dark"; className?: string }) {
  const src = variant === "dark" ? "/branding/logo-dark.svg" : "/branding/logo-light.svg";
  return <img src={src} alt="Digital Patch Studio" className={className} />;
}
