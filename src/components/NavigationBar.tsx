import { Logo } from './Logo';
import { Button } from './Button';

interface NavigationItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface NavigationBarProps {
  className?: string;
}

export function NavigationBar({ className = "" }: NavigationBarProps) {
  const navigationItems: NavigationItem[] = [
    { label: "About us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Use Cases", href: "#use-cases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Blog", href: "#blog" }
  ];

  return (
    <nav className={`flex items-center justify-between px-[100px] py-0 w-full max-w-[1440px] mx-auto ${className}`}>
      <div className="flex items-center py-2.5">
        <Logo />
      </div>
      
      <div className="flex items-center gap-10">
        {navigationItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={item.onClick}
            className="font-space-grotesk font-normal text-xl leading-7 text-[#191A23] hover:text-[#B9FF66] transition-colors duration-200 whitespace-nowrap"
          >
            {item.label}
          </a>
        ))}
        
        <Button variant="secondary">
          Request a quote
        </Button>
      </div>
    </nav>
  );
}