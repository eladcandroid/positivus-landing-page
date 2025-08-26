interface LogoProps {
  className?: string;
}

export function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`relative h-9 w-[219.537px] ${className}`}>
      <div className="absolute bottom-0 left-0 right-[83.6%] top-0">
        <img 
          src="/assets/icon.svg" 
          alt="Positivus Icon" 
          className="block max-w-none size-full object-contain"
        />
      </div>
      <div className="absolute bottom-[12.33%] left-[22.28%] right-0 top-[8.33%]">
        <img 
          src="/assets/positivus.svg" 
          alt="Positivus" 
          className="block max-w-none size-full object-contain"
        />
      </div>
    </div>
  );
}