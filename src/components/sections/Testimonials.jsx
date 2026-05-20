function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      review:
        "FitZone completely changed my lifestyle. I lost 12kg in just 3 months.",
    },
    {
      name: "Priya Verma",
      review:
        "The trainers and workout plans are amazing. Highly recommended!",
    },
    {
      name: "Aman Patel",
      review:
        "The best fitness platform for beginners and professionals.",
    },
  ];

  return (
    <section className="bg-black text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            SUCCESS <span className="text-red-500">STORIES</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Hear from people who transformed their lives with FitZone.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
            >
              <p className="text-gray-300 leading-relaxed">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold text-red-500">
                {item.name}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;