function Hero() {
  return (
    <section className="h-[90vh] bg-black text-white flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <p className="text-red-500 font-semibold mb-4 tracking-widest">
            TRAIN HARDER
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            BUILD YOUR <span className="text-red-500">DREAM</span> PHYSIQUE
          </h1>

          <p className="text-gray-400 mt-6 text-lg">
            Transform your body with professional workout plans,
            expert guidance, and powerful fitness tracking.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Start Now
            </button>

            <button className="border border-white hover:border-red-500 hover:text-red-500 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Explore Plans
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
            alt="Fitness"
            className="rounded-3xl shadow-2xl w-full max-w-md object-cover hover:scale-105 transition duration-500"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;