const AboutMeSection = () => {
    return (
      <section className="py-24 bg-gradient-to-t from-primary/5 via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                  Hi, I’m [Your Name]—a Software Engineer who loves crafting solutions.
                </h2>
                <div className="space-y-6 text-gray-600">
                  <p className="text-xl leading-relaxed">
                    My journey into software engineering started with a simple goal: to create tools that solve real-world problems. Over the years, I’ve built impactful projects that have made a difference for businesses and individuals alike.
                  </p>
                  <p className="text-xl leading-relaxed">
                    From building scalable applications to experimenting with cutting-edge technologies, my passion lies in turning ideas into reality. Every line of code I write reflects my dedication to growth, learning, and innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default AboutMeSection;