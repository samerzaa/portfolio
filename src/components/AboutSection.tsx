
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-dark">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="w-full h-[500px] rounded-2xl overflow-hidden">
                <img 
                  src="/assets/hero-image.jpg" 
                  alt="About me" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative dots pattern */}
              <div className="absolute top-4 right-4 w-16 h-16 opacity-20">
                <div className="grid grid-cols-4 gap-1 h-full">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-gray-light rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-white font-prompt">
              About
            </h2>
            <p className="text-lg text-gray-light leading-relaxed font-karla max-w-lg">
              Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
              Override the digital divide with additional clickthroughs from DevOps. Nanotechnology 
              immersion along the information highway will close the loop on focusing solely on the bottom line.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
