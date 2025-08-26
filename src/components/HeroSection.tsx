import { Button } from './Button';

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className = "" }: HeroSectionProps) {
  return (
    <section className={`flex items-start justify-between px-[100px] py-0 w-full max-w-[1440px] mx-auto ${className}`}>
      {/* Left Content */}
      <div className="flex flex-col gap-[35px] items-start max-w-[531px]">
        <h1 className="font-space-grotesk font-medium text-[60px] leading-normal text-[#191A23]">
          Navigating the digital landscape for success
        </h1>
        
        <p className="font-space-grotesk font-normal text-xl leading-7 text-[#191A23] max-w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
        </p>
        
        <Button variant="primary">
          Book a consultation
        </Button>
      </div>

      {/* Right Illustration */}
      <div className="relative flex-shrink-0">
        <div className="relative w-[600px] h-[515px]">
          {/* Background ellipses */}
          <div className="absolute top-16 left-[40px] w-[553px] h-[378px] opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-[#B9FF66] to-[#7ED321] rounded-full transform rotate-[28deg]"></div>
          </div>
          <div className="absolute top-[100px] left-[20px] w-[553px] h-[378px] opacity-15">
            <div className="w-full h-full bg-gradient-to-r from-[#B9FF66] to-[#7ED321] rounded-full transform rotate-[28deg]"></div>
          </div>
          <div className="absolute top-[137px] left-0 w-[553px] h-[378px] opacity-10">
            <div className="w-full h-full bg-gradient-to-r from-[#B9FF66] to-[#7ED321] rounded-full transform rotate-[28deg]"></div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-[89px] left-[116px] w-[31px] h-[31px] bg-[#B9FF66] rounded-full"></div>
          <div className="absolute top-[425px] left-[411px] w-5 h-5 bg-[#191A23] rounded-full"></div>
          <div className="absolute top-[41px] left-[58px] w-[47px] h-[47px] bg-[#7ED321] rounded-full"></div>

          {/* Central illustration */}
          <div className="absolute top-[25%] left-[25%] w-[340px] h-[368px]">
            <img 
              src="/assets/group1.svg" 
              alt="Digital Marketing Illustration" 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Floating frame elements */}
          <div className="absolute top-[427px] left-[293px] w-9 h-9">
            <img 
              src="/assets/frame1.svg" 
              alt="Frame decoration" 
              className="w-full h-full object-contain"
            />
          </div>
          <div className="absolute top-[313px] left-[58px] w-[99px] h-[99px] transform rotate-45">
            <img 
              src="/assets/frame2.svg" 
              alt="Frame decoration" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}