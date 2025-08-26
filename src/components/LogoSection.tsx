interface Company {
  name: string;
  logo: React.ReactNode;
}

interface LogoSectionProps {
  className?: string;
}

export function LogoSection({ className = "" }: LogoSectionProps) {
  const companies: Company[] = [
    {
      name: "Company 1",
      logo: (
        <div className="w-[124.113px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company1.svg" 
            alt="Company 1" 
            className="block max-w-none size-full"
          />
        </div>
      )
    },
    {
      name: "Company 2", 
      logo: (
        <div className="w-[126.369px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company2.svg" 
            alt="Company 2" 
            className="block max-w-none size-full"
          />
        </div>
      )
    },
    {
      name: "Company 3",
      logo: (
        <div className="w-[128.626px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company3.svg" 
            alt="Company 3" 
            className="block max-w-none size-full"
          />
        </div>
      )
    },
    {
      name: "Company 4",
      logo: (
        <div className="w-[145.551px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company4.svg" 
            alt="Company 4" 
            className="block max-w-none size-full"
          />
        </div>
      )
    },
    {
      name: "Company 5",
      logo: (
        <div className="w-[125.241px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company5.svg" 
            alt="Company 5" 
            className="block max-w-none size-full"
          />
        </div>
      )
    },
    {
      name: "Company 6",
      logo: (
        <div className="w-[110.573px] h-12 relative mix-blend-luminosity overflow-clip shrink-0">
          <img 
            src="/assets/company6.svg" 
            alt="Company 6" 
            className="block max-w-none size-full"
          />
        </div>
      )
    }
  ];

  return (
    <section className={`flex items-start justify-between px-[100px] py-0 w-full max-w-[1440px] mx-auto ${className}`}>
      {companies.map((company, index) => (
        <div key={index} className="flex items-center justify-center">
          {company.logo}
        </div>
      ))}
    </section>
  );
}