function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "₹499",
      features: [
        "Access to gym",
        "Basic workout plans",
        "Community support",
      ],
    },
    {
      title: "Pro",
      price: "₹999",
      features: [
        "Personal trainer",
        "Advanced workout plans",
        "Diet guidance",
      ],
    },
    {
      title: "Elite",
      price: "₹1999",
      features: [
        "1-on-1 coaching",
        "Custom diet plan",
        "Full premium access",
      ],
    },
  ];

  return (
    <section className="bg-zinc-950 text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            MEMBERSHIP <span className="text-red-500">PLANS</span>
          </h2>

          <p className="text-gray-400 mt-4">
            Choose the best plan for your fitness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-red-500 transition duration-300"
            >
              <h3 className="text-3xl font-bold text-red-500">
                {plan.title}
              </h3>

              <h2 className="text-5xl font-bold mt-6">
                {plan.price}
                <span className="text-lg text-gray-400">/month</span>
              </h2>

              <ul className="mt-8 space-y-4 text-gray-300">
                {plan.features.map((feature, i) => (
                  <li key={i}>✔ {feature}</li>
                ))}
              </ul>

              <button className="mt-10 w-full bg-red-500 hover:bg-red-600 py-3 rounded-lg font-semibold transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Pricing;