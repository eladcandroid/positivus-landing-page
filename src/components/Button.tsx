interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  variant = "secondary", 
  size = "md", 
  className = "",
  onClick 
}: ButtonProps) {
  const baseStyles = "font-space-grotesk font-normal transition-colors duration-200 rounded-[14px] inline-flex items-center justify-center";
  
  const variants = {
    primary: "bg-[#191A23] text-white hover:bg-[#2a2b35]",
    secondary: "border border-[#191A23] bg-transparent text-[#191A23] hover:bg-[#191A23] hover:text-white"
  };

  const sizes = {
    sm: "px-6 py-3 text-base leading-7",
    md: "px-[35px] py-5 text-xl leading-7",
    lg: "px-10 py-6 text-xl leading-7"
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}