const AboutMeSection = () => {
    return (
      <section id="about" className="py-12 bg-gradient-to-t from-primary/5 via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Experienced Software Engineer with a Proven Track Record
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-xl leading-relaxed">
                    My journey into software engineering started with a simple goal: to create tools that solve real-world problems.
                  </p>
                  <p className="text-xl leading-relaxed">Over the years, I’ve honed my expertise in designing, developing, and delivering scalable, impactful software solutions to businesses and individuals.</p>
                  <p className="text-xl leading-relaxed">
                  I’m passionate about continuous learning and professional growth, staying ahead of emerging trends to ensure my contributions remain cutting-edge.
                  </p>
                  <p className="text-xl leading-relaxed">Whether I’m optimizing existing systems or bringing new ideas to life, my focus is on delivering value and driving progress in every project I take on.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMeSection;